// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import { IDistributor } from './IDistributor.sol';
import { IXReceiver } from './IXReceiver.sol';
import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface ICrosschainBase is IDistributor {
  event CrosschainClaim(
    bytes32 indexed id,
    address indexed beneficiary,
    address indexed recipient,
    uint32 domain,
    uint256 amount
  );
}

/**
 * @notice Defines functions and events for sending + processing crosschain claims
 */
interface ICrosschain is ICrosschainBase, IXReceiver {
  /**
   * @notice Used for same-chain contract claims via Satellite.
   * @dev Cross-chain contract claims are processed via `xReceive`
   * @param beneficiary The address of the beneficiary
   * @param amount The amount to claim
   * @param proof The merkle proof
   */
  function claimByMerkleProof(address beneficiary, uint256 amount, bytes32[] memory proof) external;

  /**
   * @notice Called by a relayer to submit the validate a claim made by the signer. Will validate
   * the proof on behalf of the signer, mark the claim as spent, and forward the funds to the designated
   * recipient on the designated chain.
   * @param recipient Who the disbursement should go to
   * @param recipientDomain Which chain funds should be disbursed on
   * @param beneficiary Who is claiming the funds (signer)
   * @param beneficiaryDomain Which chain is in the leaf the claimaint is proving. Could be any chain they
   * have been active on
   * @param amount The amount of the claim
   * @param signature The signature of the beneficiary on the leaf
   * @param proof The proof of the leaf in the root
   */
  function claimBySignature(
    address recipient,
    uint32 recipientDomain,
    address beneficiary,
    uint32 beneficiaryDomain,
    uint256 amount,
    bytes calldata signature,
    bytes32[] memory proof
  ) external;
}
