import { IBigNumber } from '../../interfaces/bignumber.interface';
export declare class BigNumberUtils {
    static toWei(value: number | string, tokenDecimals?: number): IBigNumber;
    static byDecimals(value: number | string, tokenDecimals?: number): number;
    static byDecimalsString(value: number | string, tokenDecimals?: number): string;
}
