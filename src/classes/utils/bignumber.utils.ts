import BigNumber from 'bignumber.js';
import { BigNumberFactory } from '../../factories/big-number-factory';

export class BigNumberUtils {
  static toWei(value: number | string, tokenDecimals = 18): BigNumber {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return BigNumberFactory.newInstance(value).multipliedBy(decimals);
  }

  static byDecimals(value: number | string, tokenDecimals = 18): number {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return new BigNumber(value).dividedBy(decimals).toNumber();
  }

  static byDecimalsString(value: number | string, tokenDecimals = 18): string {
    const decimals = BigNumberFactory.newInstance(10).exponentiatedBy(tokenDecimals);
    return new BigNumber(value).dividedBy(decimals).toFixed();
  }
}