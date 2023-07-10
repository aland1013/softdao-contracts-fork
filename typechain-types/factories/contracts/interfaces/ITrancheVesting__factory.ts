/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITrancheVesting,
  ITrancheVestingInterface,
} from "../../../contracts/interfaces/ITrancheVesting";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "time",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "VestedFraction",
        type: "uint128",
      },
    ],
    name: "SetTranche",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getTranche",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "time",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vestedFraction",
            type: "uint128",
          },
        ],
        internalType: "struct Tranche",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTranches",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "time",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vestedFraction",
            type: "uint128",
          },
        ],
        internalType: "struct Tranche[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "time",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "vestedFraction",
            type: "uint128",
          },
        ],
        internalType: "struct Tranche[]",
        name: "_tranches",
        type: "tuple[]",
      },
    ],
    name: "setTranches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITrancheVesting__factory {
  static readonly abi = _abi;
  static createInterface(): ITrancheVestingInterface {
    return new utils.Interface(_abi) as ITrancheVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITrancheVesting {
    return new Contract(address, _abi, signerOrProvider) as ITrancheVesting;
  }
}
