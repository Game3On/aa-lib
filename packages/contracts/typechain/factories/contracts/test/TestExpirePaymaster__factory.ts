/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestExpirePaymaster,
  TestExpirePaymasterInterface,
} from "../../../contracts/test/TestExpirePaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d2b380380610d2b83398101604081905261002f91610123565b8061003933610049565b61004281610099565b5050610153565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100a16100c3565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101215760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b60006020828403121561013557600080fd5b81516001600160a01b038116811461014c57600080fd5b9392505050565b610bc9806101626000396000f3fe6080604052600436106100d25760003560e01c8063b0d691fe1161007f578063c399ec8811610059578063c399ec8814610214578063d0e30db014610237578063f2fde38b1461023f578063f465c77e1461025f57600080fd5b8063b0d691fe146101b2578063bb9fe6bf146101df578063c23a5cea146101f457600080fd5b8063715018a6116100b0578063715018a61461012c5780638da5cb5b14610141578063a9a234091461019257600080fd5b80630396cb60146100d7578063205c2878146100ec578063584465f21461010c575b600080fd5b6100ea6100e53660046108b1565b61028d565b005b3480156100f857600080fd5b506100ea610107366004610900565b610323565b34801561011857600080fd5b506100ea61012736600461092c565b61039f565b34801561013857600080fd5b506100ea6103ee565b34801561014d57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561019e57600080fd5b506100ea6101ad366004610949565b610402565b3480156101be57600080fd5b506001546101689073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101eb57600080fd5b506100ea61041c565b34801561020057600080fd5b506100ea61020f36600461092c565b6104a2565b34801561022057600080fd5b50610229610532565b604051908152602001610189565b6100ea6105ca565b34801561024b57600080fd5b506100ea61025a36600461092c565b610636565b34801561026b57600080fd5b5061027f61027a3660046109d8565b6106f2565b604051610189929190610a2c565b610295610735565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b15801561030757600080fd5b505af115801561031b573d6000803e3d6000fd5b505050505050565b61032b610735565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b15801561030757600080fd5b6103a7610735565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6103f6610735565b61040060006107b6565b565b61040a61082b565b6104168484848461084f565b50505050565b610424610735565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561048e57600080fd5b505af1158015610416573d6000803e3d6000fd5b6104aa610735565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561051757600080fd5b505af115801561052b573d6000803e3d6000fd5b5050505050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156105a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c59190610aa7565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561051757600080fd5b61063e610735565b73ffffffffffffffffffffffffffffffffffffffff81166106e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106ef816107b6565b50565b60606000610704610120860186610ac0565b610712916014908290610b2c565b61071b91610b56565b604080516020810190915260008152969095509350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106dd565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461040057600080fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f766572726964650000000000000000000000000000000000000060448201526064016106dd565b6000602082840312156108c357600080fd5b813563ffffffff811681146108d757600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146106ef57600080fd5b6000806040838503121561091357600080fd5b823561091e816108de565b946020939093013593505050565b60006020828403121561093e57600080fd5b81356108d7816108de565b6000806000806060858703121561095f57600080fd5b84356003811061096e57600080fd5b9350602085013567ffffffffffffffff8082111561098b57600080fd5b818701915087601f83011261099f57600080fd5b8135818111156109ae57600080fd5b8860208285010111156109c057600080fd5b95986020929092019750949560400135945092505050565b6000806000606084860312156109ed57600080fd5b833567ffffffffffffffff811115610a0457600080fd5b84016101608187031215610a1757600080fd5b95602085013595506040909401359392505050565b604081526000835180604084015260005b81811015610a5a5760208187018101516060868401015201610a3d565b81811115610a6c576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601606001919050565b600060208284031215610ab957600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610af557600080fd5b83018035915067ffffffffffffffff821115610b1057600080fd5b602001915036819003821315610b2557600080fd5b9250929050565b60008085851115610b3c57600080fd5b83861115610b4957600080fd5b5050820193919092039150565b80356020831015610b8d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b9291505056fea2646970667358221220d7ec304a24e8f5e30ce7e2639a5841f6ecaa7b400dae7ebbcc6c8b8faddcefb364736f6c634300080f0033";

type TestExpirePaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExpirePaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExpirePaymaster__factory extends ContractFactory {
  constructor(...args: TestExpirePaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExpirePaymaster> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestExpirePaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): TestExpirePaymaster {
    return super.attach(address) as TestExpirePaymaster;
  }
  override connect(signer: Signer): TestExpirePaymaster__factory {
    return super.connect(signer) as TestExpirePaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpirePaymasterInterface {
    return new utils.Interface(_abi) as TestExpirePaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpirePaymaster {
    return new Contract(address, _abi, signerOrProvider) as TestExpirePaymaster;
  }
}
