// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable reason-string */

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@account-abstraction/contracts/samples/SimpleAccount.sol";
import "./oracle/IOracle.sol";
import "@account-abstraction/contracts/core/BasePaymaster.sol";

/**
 * A sample paymaster that define itself as a token to pay for gas.
 * The paymaster IS the token to use, since a paymaster cannot use an external contract.
 * Also, the exchange rate has to be fixed, since it can't reference an external Uniswap or other exchange contract.
 * subclass should override "getTokenValueOfEth to provide actual token exchange rate, settable by the owner.
 * Known Limitation: this paymaster is exploitable when put into a batch with multiple ops (of different accounts):
 * - while a single op can't exploit the paymaster (if postOp fails to withdraw the tokens, the user's op is reverted,
 *   and then we know we can withdraw the tokens), multiple ops with different senders (all using this paymaster)
 *   in a batch can withdraw funds from 2nd and further ops, forcing the paymaster itself to pay (from its deposit)
 * - Possible workarounds are either use a more complex paymaster scheme (e.g. the DepositPaymaster) or
 *   to whitelist the account and the called method ids.
 */
contract USDPaymaster is BasePaymaster {

    //calculated cost of the postOp
    uint256 constant public COST_OF_POST = 15000;

    address public immutable theFactory;
    IERC20 public usdToken;
    IOracle public oracle;


    constructor(address accountFactory, IEntryPoint _entryPoint, IERC20 _usdToken, IOracle _oracle) BasePaymaster(_entryPoint) {
        theFactory = accountFactory;
        usdToken = _usdToken;
        oracle = _oracle;
    }

    /**
     * transfer paymaster ownership.
     * owner of this paymaster is allowed to withdraw funds (tokens transferred to this paymaster's balance)
     * when changing owner, the old owner's withdrawal rights are revoked.
     */
    function transferOwnership(address newOwner) public override virtual onlyOwner {
        super.transferOwnership(newOwner);
    }

    /**
      * validate the request:
      * if this is a constructor call, make sure it is a known account (that is, a contract that
      * we trust that in its constructor will set
      * verify the sender has enough tokens.
      * (since the paymaster is also the token, there is no notion of "approval")
      */
    function _validatePaymasterUserOp(UserOperation calldata userOp, bytes32 /*userOpHash*/, uint256 requiredPreFund)
    internal view override returns (bytes memory context, uint256 deadline) {
        uint256 tokenPrefund = oracle.getTokenValueOfEth(requiredPreFund);

        // verificationGasLimit is dual-purposed, as gas limit for postOp. make sure it is high enough
        // make sure that verificationGasLimit is high enough to handle postOp
        require(userOp.verificationGasLimit > COST_OF_POST, "USDPaymaster: gas too low for postOp");

        if (userOp.initCode.length != 0) {
            _validateConstructor(userOp);
            require(usdToken.balanceOf(userOp.sender) >= tokenPrefund, "USDPaymaster: no balance (pre-create)");
        } else {
            require(usdToken.balanceOf(userOp.sender) >= tokenPrefund, "USDPaymaster: no balance");
            require(usdToken.allowance(userOp.sender, address(this)) >= tokenPrefund, "USDPaymaster: no allowance");
        }

        return (abi.encode(userOp.sender), 0);
    }

    // when constructing an account, validate constructor code and parameters
    // we trust our factory (and that it doesn't have any other public methods)
    function _validateConstructor(UserOperation calldata userOp) internal virtual view {
        address factory = address(bytes20(userOp.initCode[0 : 20]));
        require(factory == theFactory, "USDPaymaster: wrong account factory");

        // TODO: check constructor parameters
    }

    /**
     * actual charge of user.
     * this method will be called just after the user's TX with mode==OpSucceeded|OpReverted (account pays in both cases)
     * BUT: if the user changed its balance in a way that will cause  postOp to revert, then it gets called again, after reverting
     * the user's TX , back to the state it was before the transaction started (before the validatePaymasterUserOp),
     * and the transaction should succeed there.
     */
    function _postOp(PostOpMode mode, bytes calldata context, uint256 actualGasCost) internal override {
        //we don't really care about the mode, we just pay the gas with the user's tokens.
        (mode);
        address sender = abi.decode(context, (address));
        uint256 charge = oracle.getTokenValueOfEth(actualGasCost + COST_OF_POST);
        //actualGasCost is known to be no larger than the above requiredPreFund, so the transfer should succeed.
        usdToken.transferFrom(sender, address(this), charge);

    }
}