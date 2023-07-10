/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ConnextMockInterface extends utils.Interface {
  functions: {
    "callXreceive(bytes32,uint256,address,address,uint32,bytes32[],address)": FunctionFragment;
    "domain()": FunctionFragment;
    "setDomain(uint32)": FunctionFragment;
    "xcall(uint32,address,address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "callXreceive" | "domain" | "setDomain" | "xcall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callXreceive",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "domain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDomain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "xcall",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "callXreceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "domain", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDomain", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xcall", data: BytesLike): Result;

  events: {
    "XCalled(uint32,address,address,address,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "XCalled"): EventFragment;
}

export interface XCalledEventObject {
  destination: number;
  to: string;
  asset: string;
  delegate: string;
  amount: BigNumber;
  slippage: BigNumber;
  callData: string;
}
export type XCalledEvent = TypedEvent<
  [number, string, string, string, BigNumber, BigNumber, string],
  XCalledEventObject
>;

export type XCalledEventFilter = TypedEventFilter<XCalledEvent>;

export interface ConnextMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnextMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    callXreceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      _proof: PromiseOrValue<BytesLike>[],
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    domain(overrides?: CallOverrides): Promise<[number]>;

    setDomain(
      domain_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  callXreceive(
    _transferId: PromiseOrValue<BytesLike>,
    _amount: PromiseOrValue<BigNumberish>,
    _asset: PromiseOrValue<string>,
    _originSender: PromiseOrValue<string>,
    _origin: PromiseOrValue<BigNumberish>,
    _proof: PromiseOrValue<BytesLike>[],
    _distributor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  domain(overrides?: CallOverrides): Promise<number>;

  setDomain(
    domain_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xcall(
    _destination: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _delegate: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _slippage: PromiseOrValue<BigNumberish>,
    _callData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callXreceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      _proof: PromiseOrValue<BytesLike>[],
      _distributor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    domain(overrides?: CallOverrides): Promise<number>;

    setDomain(
      domain_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "XCalled(uint32,address,address,address,uint256,uint256,bytes)"(
      destination?: null,
      to?: null,
      asset?: null,
      delegate?: null,
      amount?: null,
      slippage?: null,
      callData?: null
    ): XCalledEventFilter;
    XCalled(
      destination?: null,
      to?: null,
      asset?: null,
      delegate?: null,
      amount?: null,
      slippage?: null,
      callData?: null
    ): XCalledEventFilter;
  };

  estimateGas: {
    callXreceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      _proof: PromiseOrValue<BytesLike>[],
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    domain(overrides?: CallOverrides): Promise<BigNumber>;

    setDomain(
      domain_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callXreceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      _proof: PromiseOrValue<BytesLike>[],
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDomain(
      domain_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
