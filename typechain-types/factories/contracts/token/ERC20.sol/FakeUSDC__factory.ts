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
  FakeUSDC,
  FakeUSDCInterface,
} from "../../../../contracts/token/ERC20.sol/FakeUSDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60406080815234620003da5762000d5e803803806200001e81620003df565b9283398101608082820312620003da5781516001600160401b039290838111620003da57826200005091830162000405565b926020928383015190828211620003da576200006e91840162000405565b91858101519060ff8216809203620003da576060015194805192808411620002da5760038054946001938487811c97168015620003cf575b89881014620003b9578190601f9788811162000363575b508990888311600114620002fc57600092620002f0575b505060001982841b1c191690841b1781555b8551918211620002da5760049586548481811c91168015620002cf575b89821014620002ba578681116200026f575b5087908684116001146200020457938394918492600095620001f8575b50501b92600019911b1c19161783555b60ff1960055416176005553315620001b95750507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600091620001888460025462000477565b600255338352828152848320620001a185825462000477565b905584519384523393a3516108c290816200049c8239f35b60649285519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519350388062000132565b9190601f1984169288600052848a6000209460005b8c898383106200025757505050106200023c575b50505050811b01835562000142565b01519060f884600019921b161c19169055388080806200022d565b86860151895590970196948501948893500162000219565b87600052886000208780860160051c8201928b8710620002b0575b0160051c019085905b828110620002a357505062000115565b6000815501859062000293565b925081926200028a565b602288634e487b7160e01b6000525260246000fd5b90607f169062000103565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d4565b90869350601f19831691856000528b6000209260005b8d8282106200034c575050841162000333575b505050811b018155620000e6565b015160001983861b60f8161c1916905538808062000325565b8385015186558a9790950194938401930162000312565b90915083600052896000208880850160051c8201928c8610620003af575b918891869594930160051c01915b8281106200039f575050620000bd565b600081558594508891016200038f565b9250819262000381565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000a6565b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620002da57604052565b919080601f84011215620003da5782516001600160401b038111620002da576020906200043b601f8201601f19168301620003df565b92818452828287010111620003da5760005b8181106200046357508260009394955001015290565b85810183015184820184015282016200044d565b919082018092116200048557565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461049c57508163095ea7b31461047257816318160ddd1461045357816323b872dd14610389578163313ce56714610367578163395093511461031757816370a08231146102e057816395d89b41146101c1578163a457c2d71461011957508063a9059cbb146100e95763dd62ed3e1461009e57600080fd5b346100e557806003193601126100e557806020926100ba6105c1565b6100c26105dc565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50346100e557806003193601126100e5576020906101126101086105c1565b6024359033610615565b5160018152f35b905082346101be57826003193601126101be576101346105c1565b918360243592338152600160205281812060018060a01b038616825260205220549082821061016d57602085610112858503873361078a565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b8383346100e557816003193601126100e557805190828454600181811c908083169283156102d6575b60209384841081146102c3578388529081156102a75750600114610252575b505050829003601f01601f191682019267ffffffffffffffff84118385101761023f575082918261023b925282610578565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106102935750505050830101858080610209565b80548886018301529301928490820161027d565b60ff1916878501525050151560051b8401019050858080610209565b634e487b7160e01b895260228a52602489fd5b91607f16916101ea565b5050346100e55760203660031901126100e55760209181906001600160a01b036103086105c1565b16815280845220549051908152f35b5050346100e557806003193601126100e55761011260209261036061033a6105c1565b338352600186528483206001600160a01b038216845286529184902054602435906105f2565b903361078a565b5050346100e557816003193601126100e55760209060ff600554169051908152f35b839150346100e55760603660031901126100e5576103a56105c1565b6103ad6105dc565b91846044359460018060a01b0384168152600160205281812033825260205220549060001982036103e7575b602086610112878787610615565b8482106104105750918391610405602096956101129503338361078a565b9193948193506103d9565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100e557816003193601126100e5576020906002549051908152f35b5050346100e557806003193601126100e5576020906101126104926105c1565b602435903361078a565b8490843461057457826003193601126105745782600354600181811c9080831692831561056a575b60209384841081146102c3578388529081156102a7575060011461051457505050829003601f01601f191682019267ffffffffffffffff84118385101761023f575082918261023b925282610578565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8385106105565750505050830101858080610209565b805488860183015293019284908201610540565b91607f16916104c4565b8280fd5b6020808252825181830181905290939260005b8281106105ad57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161058b565b600435906001600160a01b03821682036105d757565b600080fd5b602435906001600160a01b03821682036105d757565b919082018092116105ff57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0390811691821561073757169182156106e65760008281528060205260408120549180831061069257604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9587602096528286520382822055868152206106878282546105f2565b9055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561083b57169182156107eb5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea264697066735822122040173e45aa415078ee98efce3d8331fb2fe28cb1097c37d85fe51662601b137d64736f6c63430008100033";

type FakeUSDCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeUSDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeUSDC__factory extends ContractFactory {
  constructor(...args: FakeUSDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FakeUSDC> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      supply,
      overrides || {}
    ) as Promise<FakeUSDC>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      supply,
      overrides || {}
    );
  }
  override attach(address: string): FakeUSDC {
    return super.attach(address) as FakeUSDC;
  }
  override connect(signer: Signer): FakeUSDC__factory {
    return super.connect(signer) as FakeUSDC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeUSDCInterface {
    return new utils.Interface(_abi) as FakeUSDCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeUSDC {
    return new Contract(address, _abi, signerOrProvider) as FakeUSDC;
  }
}
