// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { ICrosschain } from '../interfaces/ICrosschain.sol';
import { CrosschainDistributor } from './abstract/CrosschainDistributor.sol';
import { TrancheVesting, Tranche } from './abstract/TrancheVesting.sol';
import { AdvancedDistributor } from './abstract/AdvancedDistributor.sol';
import { Distributor } from './abstract/Distributor.sol';
import { MerkleSet } from './abstract/MerkleSet.sol';
import { IConnext } from '../interfaces/IConnext.sol';
import { IDistributor } from '../interfaces/IDistributor.sol';
import { ECDSA } from '@openzeppelin/contracts/utils/cryptography/ECDSA.sol';
import 'hardhat/console.sol';

/**
 * @title
 * @author
 * @notice Distributes funds to a beneficiary on a remote chain.
 *
 * @dev A note on the merkle tree structure:
 *
 * The leaf structure used is: `hash(beneficiaryDomain, beneficiary, amount)`.
 *
 * The merkle leaves includes domain context to support crosschain claiming initiated from
 * a smart contract on a remote domain. In this flow, you can only guarantee the beneficiary
 * controls their address on the domain the claim was initiated from (contracts do not share
 * addresses across chains). Including the domain context in the leaf allows the contract to
 * enforce this assertion via merkle proofs instead of using an authorized call (see:
 * https://docs.connext.network/developers/guides/authentication).
 *
 * EOAs that share addresses across domains could have multiple unique leaves. However,
 * each `beneficiary,beneficiaryDomain` combo should be unique.
 */
contract CrosschainTrancheVestingMerkle is CrosschainDistributor, TrancheVesting, MerkleSet {
  constructor(
    IERC20 _token,
    IConnext _connext,
    uint256 _total,
    string memory _uri,
    uint256 _voteFactor,
    Tranche[] memory _tranches,
    bytes32 _merkleRoot
  )
    CrosschainDistributor(_connext)
    TrancheVesting(_token, _total, _uri, _voteFactor, _tranches)
    MerkleSet(_merkleRoot)
  {}

  function NAME() external pure override(Distributor, IDistributor) returns (string memory) {
    return 'CrosschainTrancheVestingMerkle';
  }

  function VERSION() external pure override(Distributor, IDistributor) returns (uint256) {
    return 1;
  }

  function _initializeDistributionRecord(address _beneficiary, uint256 _amount) internal override {
    super._initializeDistributionRecord(_beneficiary, _amount);
  }

  function initializeDistributionRecord(
    uint256 _domain, // the domain of the beneficiary
    address _beneficiary, // the address that will receive tokens
    uint256 _amount, // the total claimable by this beneficiary
    bytes32[] calldata merkleProof
  ) external validMerkleProof(_getLeaf(_domain, _beneficiary, _amount), merkleProof) {
    _initializeDistributionRecord(_beneficiary, _amount);
  }

  /**
   * @notice Used for cross-chain contract claims via Satellite, which sends funds through Connext.
   * @dev This *DOES NOT* require authorization, meaning the claim can be spoofed. However, the worst
   * case there is the beneficiary has a claim initiated on their behalf, as the funds always go back to
   * the address / chain information included in the proven leaf.
   * @param _callData Calldata from origin initiator (Satellite). Should include proof, leaf information, and recipient
   * information
   */
  function xReceive(
    bytes32, // _transferId,
    uint256, // _amount,
    address, // _asset,
    address, // _originSender,
    uint32, // _origin,
    bytes calldata _callData
  ) external onlyConnext returns (bytes memory) {
    // Decode the data
    (address beneficiary, uint32 beneficiaryDomain, uint256 amount, bytes32[] memory proof) = abi
      .decode(_callData, (address, uint32, uint256, bytes32[]));
    _verifyMembership(_getLeaf(beneficiaryDomain, beneficiary, amount), proof);
    _executeClaim(
      beneficiary,
      beneficiary,
      beneficiaryDomain,
      uint120(getClaimableAmount(beneficiary))
    );
    return bytes('');
  }

  function _executeClaim(
    address beneficiary,
    uint256 _amount
  ) internal override returns (uint256) {
    return super._executeClaim(beneficiary, _amount);
  }

  function _settleClaim(
    address _beneficiary,
    uint256 _amount
  ) internal override(Distributor, CrosschainDistributor) {
    super._settleClaim(_beneficiary, _amount);
  }

  /**
   * @notice Used for same-chain contract claims via Satellite.
   * @param _beneficiary The address of the beneficiary
   * @param _amount The amount to claim
   * @param _proof The merkle proof
   */
  function claimByMerkleProof(
    address _beneficiary,
    uint256 _amount,
    bytes32[] calldata _proof
  ) external override {
    _verifyMembership(_getLeaf(domain, _beneficiary, _amount), _proof);
    // todo check math
    _executeClaim(_beneficiary, _beneficiary, domain, uint120(getClaimableAmount(_beneficiary)));
  }

  /**
   * @notice Called by a relayer to submit the validate a claim made by the signer. Will validate
   * the proof on behalf of the signer, mark the claim as spent, and forward the funds to the designated
   * recipient on the designated chain.
   * @param _recipient Who the disbursement should go to
   * @param _recipientDomain Which chain funds should be disbursed on
   * @param _beneficiary Who is claiming the funds (signer)
   * @param _beneficiaryDomain Which chain is in the leaf the claimaint is proving. Could be any chain they
   * have been active on
   * @param _amount The amount of the claim
   * @param _signature The signature of the beneficiary on the leaf
   * @param _proof The proof of the leaf in the root
   */
  function claimBySignature(
    address _recipient,
    uint32 _recipientDomain,
    address _beneficiary,
    uint32 _beneficiaryDomain,
    uint256 _amount,
    bytes calldata _signature,
    bytes32[] calldata _proof
  ) external override {
    // Recover the signature by claimaint
    // NOTE: _beneficiary + _beneficiaryDomain will be unique per valid claim
    address recovered = _recoverSignature(
      keccak256(
        abi.encodePacked(_recipient, _recipientDomain, _beneficiary, _beneficiaryDomain, _amount)
      ),
      _signature
    );
    console.log('recovered: %s', recovered);
    console.log('beneficiary: %s', _beneficiary);
    require(recovered == _beneficiary, '!recovered');

    // Validate the claim
    _verifyMembership(_getLeaf(_beneficiaryDomain, _beneficiary, _amount), _proof);
    _executeClaim(
      _beneficiary,
      _recipient,
      _recipientDomain,
      uint120(getClaimableAmount(_beneficiary))
    );
  }

  /**
   * @notice Allows the owner update the merkle root
   * @param _merkleRoot The new merkle root
   */
  function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
    _setMerkleRoot(_merkleRoot);
  }

  /**
   * @notice Holds the logic to recover the signer from an encoded payload.
   * @dev Will hash and convert to an eth signed message.
   * @param _signed The hash that was signed.
   * @param _sig The signature from which we will recover the signer.
   */
  function _recoverSignature(bytes32 _signed, bytes calldata _sig) internal view returns (address) {
    // Recover
    bytes32 message = ECDSA.toEthSignedMessageHash(_signed);
    console.log('message:');
    console.logBytes32(message);
    return ECDSA.recover(message, _sig);
  }

  /**
   * @notice Generates the leaf from plaintext
   * @param _domain Beneficiary domain
   * @param _beneficiary Beneficiary address on domain
   * @param _amount Total claim amount
   */
  function _getLeaf(
    uint256 _domain, // the domain of the recipient
    address _beneficiary, // the address that will receive tokens
    uint256 _amount
  ) internal pure returns (bytes32 _leaf) {
    _leaf = keccak256(abi.encodePacked(_domain, _beneficiary, _amount));
  }
}
