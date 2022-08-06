import BigNumber from "bignumber.js";

export class BigNumberFactory {
  static newInstance(value: string | number, base?: number) {
    return new BigNumber(value, base);
  }
}