import BigNumber from 'bignumber.js';
import { IBigNumber } from '../interfaces/bignumber.interface';

export class BigNumberFactory {
  static newInstance(value: string | number, base?: number): IBigNumber {
    return new BigNumber(value, base) as IBigNumber;
  }
}