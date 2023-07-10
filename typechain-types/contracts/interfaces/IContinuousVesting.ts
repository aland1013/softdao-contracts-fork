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

export interface IContinuousVestingInterface extends utils.Interface {
  functions: {
    "getVestingConfig()": FunctionFragment;
    "setVestingConfig(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getVestingConfig" | "setVestingConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getVestingConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getVestingConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingConfig",
    data: BytesLike
  ): Result;

  events: {
    "SetContinuousVesting(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetContinuousVesting"): EventFragment;
}

export interface SetContinuousVestingEventObject {
  start: BigNumber;
  cliff: BigNumber;
  end: BigNumber;
}
export type SetContinuousVestingEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SetContinuousVestingEventObject
>;

export type SetContinuousVestingEventFilter =
  TypedEventFilter<SetContinuousVestingEvent>;

export interface IContinuousVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IContinuousVestingInterface;

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
    getVestingConfig(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    setVestingConfig(
      _start: PromiseOrValue<BigNumberish>,
      _cliff: PromiseOrValue<BigNumberish>,
      _end: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getVestingConfig(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  setVestingConfig(
    _start: PromiseOrValue<BigNumberish>,
    _cliff: PromiseOrValue<BigNumberish>,
    _end: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getVestingConfig(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    setVestingConfig(
      _start: PromiseOrValue<BigNumberish>,
      _cliff: PromiseOrValue<BigNumberish>,
      _end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetContinuousVesting(uint256,uint256,uint256)"(
      start?: null,
      cliff?: null,
      end?: null
    ): SetContinuousVestingEventFilter;
    SetContinuousVesting(
      start?: null,
      cliff?: null,
      end?: null
    ): SetContinuousVestingEventFilter;
  };

  estimateGas: {
    getVestingConfig(overrides?: CallOverrides): Promise<BigNumber>;

    setVestingConfig(
      _start: PromiseOrValue<BigNumberish>,
      _cliff: PromiseOrValue<BigNumberish>,
      _end: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getVestingConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setVestingConfig(
      _start: PromiseOrValue<BigNumberish>,
      _cliff: PromiseOrValue<BigNumberish>,
      _end: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
