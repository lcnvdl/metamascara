import { BigNumberFactory } from '../../factories/big-number-factory';
import { IBigNumber } from '../../interfaces/bignumber.interface';

export class BigNumberUtils {
  static toWei(value: number | string, tokenDecimals = 18): IBigNumber {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return BigNumberFactory.newInstance(value).multipliedBy(decimals);
  }

  static byDecimals(value: number | string, tokenDecimals = 18): number {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return BigNumberFactory.newInstance(value).dividedBy(decimals).toNumber();
  }

  static byDecimalsString(value: number | string, tokenDecimals = 18): string {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return BigNumberFactory.newInstance(value).dividedBy(decimals).toFixed();
  }
}