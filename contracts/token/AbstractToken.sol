// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

// import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import {IAbstractToken, IAbstractERC20, AbstractTokenMessage, AbstractTokenMessageStatus} from "../interfaces/IAbstractToken.sol";
import {SignatureValidator} from "./SignatureValidator.sol";

abstract contract AbstractToken is IAbstractToken, Ownable, SignatureValidator {
    SignatureValidator public validator;
    mapping(bytes32 => bool) reified;

    constructor(address _signer) SignatureValidator(_signer) {}

    // the actual mechanics of reifying the token depend on the type of token
    function _reify(AbstractTokenMessage calldata message) internal virtual;

    // transforms token(s) from message to contract
    function reify(AbstractTokenMessage calldata message) public {
        // checks
        require(
            status(message) == AbstractTokenMessageStatus.valid,
            "message reified or invalid"
        );

        // effects
        bytes32 id = messageId(message);
        reified[id] = true;

        // interactions
        // the actual mechanics of creating the token depends on implementation
        _reify(message);
    }

    // the actual mechanics of dereifying the token depend on the type of token
    function _dereify(AbstractTokenMessage calldata message) internal virtual;

    // transforms token(s) from contract to message
    function dereify(AbstractTokenMessage calldata message) public {
        /**
        Requirements to de-reify tokens
        - only the signer can authorize de-reification
        */

        // checks
        require(
            status(message) == AbstractTokenMessageStatus.unknown,
            "must dereify to another domain"
        );

        // effects
        // interactions
        _dereify(message);
        emit Dereify(message);
    }

    // check metadata - depends on implementation
    function _validMeta(bytes calldata metadata) virtual internal view returns (bool);

    // check abstract token message validity: an abstract token message can only be reified if valid
    function status(AbstractTokenMessage calldata message)
        public
        view
        returns (AbstractTokenMessageStatus)
    {
        bytes32 id = messageId(message);

        // this message was once valid but now it is reified
        if (reified[id]) return AbstractTokenMessageStatus.reified;

        // the metadata is not valid
        if (!_validMeta(message.meta)) return AbstractTokenMessageStatus.invalid;

        // the message was never valid
        if (validateSignature(id, message.proof) != MAGIC_VALUE)
            return AbstractTokenMessageStatus.invalid;
        
        // the message is not intended for this contract
        if (message.chainId != block.chainid || message.implementation != address(this)) {
            return AbstractTokenMessageStatus.unknown;
        }

        // the message is still valid
        return AbstractTokenMessageStatus.valid;
    }

    function messageId(AbstractTokenMessage calldata message)
        public
        pure
        returns (bytes32)
    {
        // TODO: should this use EIP-712? The ID of the message is extrinsic to the chain.
        // note that the proof is not part of the message id: this enables a signature proof
        return keccak256(
            abi.encode(
                message.chainId,
                message.implementation,
                message.owner,
                message.meta
            )
        );
    }

    // admin functions
    function setSigner(address _signer) public onlyOwner {
        _setSigner(_signer);
    }

    function _equal(string memory a, string memory b) internal pure returns (bool) {
      return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));

    }
}
