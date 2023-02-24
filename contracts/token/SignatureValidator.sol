//SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import {AbstractTokenMessage} from "../interfaces/IAbstractToken.sol";
import {SignatureChecker} from "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

// TODO: unify interface - now the merkle root oracle requires bytes32[] instead of bytes
abstract contract SignatureValidator {

    event SetSigner(address signer);
    bytes32 public constant DOMAIN_TYPE_HASH =
        keccak256(
            "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        );
    bytes32 public constant DOMAIN_NAME = keccak256("SignatureValidator");
    bytes32 public constant DOMAIN_VERSION = keccak256("1");
    bytes32 public constant PERMIT_TYPEHASH =
        keccak256("Mint(AbstractTokenMessage message)");
    bytes4 public constant MAGIC_VALUE =
        bytes4(keccak256("validSignature(bytes32,bytes)"));
    bytes32 public immutable DOMAIN_SEPARATOR;
    address internal signer;

    constructor(address _signer) {
        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                DOMAIN_TYPE_HASH,
                DOMAIN_NAME, // user readable signing domain
                DOMAIN_VERSION, // signing domain version
                block.chainid, // current chain id
                address(this) // verifying contract
            )
        );
        
        _setSigner(_signer);
    }

    function _setSigner (address _signer) internal {
      signer = _signer;
      emit SetSigner(signer);
    }

    function validateSignature(
        bytes32 messageId,
        bytes calldata proof
    ) public view returns (bytes4) {
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                DOMAIN_SEPARATOR,
                keccak256(abi.encode(PERMIT_TYPEHASH, messageId))
            )
        );

        if (SignatureChecker.isValidSignatureNow(signer, digest, proof)) {
            return MAGIC_VALUE;
        }
        return 0;
    }
}
