// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "@aa-lib/contracts/interfaces/IEntryPoint.sol";

contract BundlerHelper {
    function getUserOpHashes(IEntryPoint entryPoint, UserOperation[] memory userOps) external view returns (bytes32[] memory ret) {
        ret = new bytes32[](userOps.length);
        for (uint i = 0; i < userOps.length; i++) {
            ret[i] = entryPoint.getUserOpHash(userOps[i]);
        }
    }

    function getCodeHashes(address[] memory addresses) public view returns (bytes32) {
        bytes32[] memory hashes = new bytes32[](addresses.length);
        for (uint i = 0; i < addresses.length; i++) {
            hashes[i] = addresses[i].codehash;
        }
        bytes memory data = abi.encode(hashes);
        return keccak256(data);
    }
}
