// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import { SafeERC20 } from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

import { AdvancedDistributor, IERC20 } from './AdvancedDistributor.sol';
import { Distributor } from './Distributor.sol';
import { IConnext } from '../../interfaces/IConnext.sol';
import { ICrosschain } from '../../interfaces/ICrosschain.sol';

abstract contract CrosschainDistributor is AdvancedDistributor, ICrosschain {
  using SafeERC20 for IERC20;

  IConnext public immutable connext;
  uint32 public immutable domain;

  /**
   * @notice Throws if the msg.sender is not connext
   */
  modifier onlyConnext() {
    require(msg.sender == address(connext), '!connext');
    _;
  }

  constructor(IConnext _connext) {
    connext = _connext;
    domain = uint32(_connext.domain());
  }

  //   // ensure single-chain execute claims will fail, and all inheriting contracts should use
  //   // the _executeClaim() with distinctions between beneficiary and amount instead
  //   function _executeClaim(address, uint256) internal virtual override returns (uint256) {
  //     require(false, '!single chain');
  //   }

  // claim assumed to be valid at this point
  function _executeClaim(
    address _beneficiary,
    address _recipient,
    uint32 _recipientDomain,
    uint256 _amount
  ) internal virtual {
    // updates the claim record; updates voting power internal
    super._executeClaim(_beneficiary, _amount);

    _settleClaim(_beneficiary, _recipient, _recipientDomain, _amount);
  }

  function _settleClaim(address, uint256) internal virtual override {
    // Do nothing to preserve super._executeClaim() without doing a distribution
    require(false, 'TODO: not sure how to handle this yet');
  }

  // Handle the crosschain-aware distribution:
  // - beneficiary-indicated _recipient
  // - beneficiary-indicated _recipientDomain
  // - _amount
  function _settleClaim(
    address _beneficiary,
    address _recipient,
    uint32 _recipientDomain,
    uint256 _amount
  ) internal virtual {
    bytes32 id;
    if (_recipientDomain == 0 || _recipientDomain == domain) {
      token.safeTransfer(_recipient, _amount);
    } else {
      id = connext.xcall(
        _recipientDomain, // destination domain
        _recipient, // to
        address(token), // asset
        _recipient, // delegate, only required for self-execution + slippage
        _amount, // amount
        0, // slippage -- assumes no pools on connext
        bytes('') // calldata
      );
    }
    emit CrosschainClaim(id, _beneficiary, _recipient, _recipientDomain, _amount);
  }
}
