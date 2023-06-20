// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import { IConnext } from "../interfaces/IConnext.sol";
import { ICrosschain } from "../interfaces/ICrosschain.sol";
import { MerkleSet } from "./abstract/MerkleSet.sol";

/**
 * @title Satellite
 * @notice This contract allows smart-contract users to initiate a claim from any chain, back
 * to the address on this chain. This contract validates inclusion in the merkle root, but only
 * as a sanity check. The distributor contract is the source of truth.
 * 
 * @dev This contract should be deployed to any domain where beneficiaries may be contract wallets, that
 * is supported by the distribution event. All chains in any associated distribution event must be 
 * supported by the connext protocol.
 */
contract Satellite is MerkleSet {
    // ========== Events ===========

    /**
     * @notice Emitted when a claim is initiated
     * @param id The transfer id for sending claim to custodian
     * @param beneficiary The user claiming
     * @param amount The amount to claim
     */
    event ClaimInitiated(bytes32 indexed id, address indexed beneficiary, uint256 amount);

    // ========== Storage ===========

    /**
     * @notice The distributor hosted on on distributorDomain
     */
    ICrosschain immutable public distributor;
    
    /**
     * @notice The domain the distributor is deployed to
     */
    uint32 immutable public distributorDomain;

    /**
     * @notice The current domain
     */
    uint32 immutable public domain;

    /**
     * @notice Address of Connext on this domain
     */
    IConnext immutable public connext;

    // ========== Constructor ===========

    constructor(
        IConnext _connext,
        ICrosschain _distributor,
        uint32 _distributorDomain,
        bytes32 _merkleRoot
    ) MerkleSet(_merkleRoot) {
        distributor = _distributor;
        distributorDomain = _distributorDomain;
        connext = _connext;
        domain = uint32(_connext.domain());

        require(_distributorDomain != domain, "same domain");
    }

    // ========== Public Methods ===========

    /**
     * @notice Initiates crosschain claim by msg.sender, relayer fees paid by native asset only.
     * @dev Verifies proof of hash(amount, sender, salt), and xcalls to Custodian
     * @param _amount The amount of the claim (in leaf)
     * @param _proof The merkle proof of the leaf in the root
     */
    function initiateClaim(
        uint256 _amount,
        bytes32[] calldata _proof
    ) public {
        // load values into memory to reduce sloads
        uint32 _distributorDomain = distributorDomain;
        uint32 _domain = domain;

        // Verify the proof before sending onchain as a cost + time saving step
        _verifyMembership(keccak256(abi.encodePacked(_domain, msg.sender, _amount)), _proof);

        bytes32 transferId = connext.xcall(
            _distributorDomain, // destination domain
            address(distributor), // to
            address(0), // asset
            address(0), // delegate, only required for self-execution + slippage
            0, // amount
            0, // slippage
            abi.encodePacked(msg.sender, _domain, _amount, _proof) // data
        );

        // Emit event
        emit ClaimInitiated(transferId, msg.sender, _amount);
    }
}
