/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FakeUsdtOracle,
  FakeUsdtOracleInterface,
} from "../../../../contracts/mocks/FakeChainlinkOracle.sol/FakeUsdtOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "string",
        name: "_oracleDescription",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
    ],
    name: "setAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052346101f75761052880380380610019816101fc565b9283398101906040818303126101f757805160208083015190926001600160401b039291908382116101f7570192601f918583860112156101f75784518481116101cd57601f1995610070828601881685016101fc565b978289528483830101116101f757839060005b8381106101e35750506000918801015260005584519283116101cd5760019384548581811c911680156101c3575b838210146101ad57838111610167575b50819284116001146101085750508192936000926100fd575b5050600019600383901b1c191690821b1790555b60405161030690816102228239f35b0151905038806100da565b6000858152828120918516969193925b87821061015057505083859610610137575b505050811b0190556100ee565b015160001960f88460031b161c1916905538808061012a565b808785968294968601518155019501930190610118565b85600052826000208480870160051c8201928588106101a4575b0160051c019086905b8281106101985750506100c1565b6000815501869061018a565b92508192610181565b634e487b7160e01b600052602260045260246000fd5b90607f16906100b1565b634e487b7160e01b600052604160045260246000fd5b8181018301518a8201840152859201610083565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176101cd5760405256fe60806040818152600436101561001457600080fd5b600091823560e01c908163313ce567146102b55750806354fd4d501461029a5780637284e4161461013357806399213cd8146101195780639a6fc8f5146100b75763feaf968c1461006457600080fd5b346100b357816003193601126100b3576100af91549051918291829190608060a084019368050000000000004b039283825260208201526362073ddf80604083015260608201520152565b0390f35b5080fd5b50346100b35760203660031901126100b35760043569ffffffffffffffffffff8116036100b3576100af91549051918291829190608060a084019368050000000000004b039283825260208201526362073ddf80604083015260608201520152565b50346100b35760203660031901126100b357600435825551f35b509034610297578060031936011261029757815191819260019283549485851c9480871696871561028d575b602097888810811461027957878652889291811561025a5750600114610205575b505082939450601f801994859203011682019482861067ffffffffffffffff8711176101f15785929391838652818452845191828186015281955b8387106101d95750508394508582601f949501015201168101030190f35b868101820151898801890152958101958895506101bb565b634e487b7160e01b82526041600452602482fd5b80845290915082907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b87831061024757509495508594508301018538610180565b805486840185015291830191810161022f565b60ff191683870152509495869550151560051b84010190508538610180565b634e487b7160e01b85526022600452602485fd5b95607f169561015f565b80fd5b50346100b357816003193601126100b3576020905160038152f35b8390346100b357816003193601126100b35780600860209252f3fea2646970667358221220dda2abce682946812da279fbd59e0238657e6e7a98d0ce997287c593a63e5c2764736f6c63430008100033";

type FakeUsdtOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeUsdtOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeUsdtOracle__factory extends ContractFactory {
  constructor(...args: FakeUsdtOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _answer: PromiseOrValue<BigNumberish>,
    _oracleDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FakeUsdtOracle> {
    return super.deploy(
      _answer,
      _oracleDescription,
      overrides || {}
    ) as Promise<FakeUsdtOracle>;
  }
  override getDeployTransaction(
    _answer: PromiseOrValue<BigNumberish>,
    _oracleDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _answer,
      _oracleDescription,
      overrides || {}
    );
  }
  override attach(address: string): FakeUsdtOracle {
    return super.attach(address) as FakeUsdtOracle;
  }
  override connect(signer: Signer): FakeUsdtOracle__factory {
    return super.connect(signer) as FakeUsdtOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeUsdtOracleInterface {
    return new utils.Interface(_abi) as FakeUsdtOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeUsdtOracle {
    return new Contract(address, _abi, signerOrProvider) as FakeUsdtOracle;
  }
}
