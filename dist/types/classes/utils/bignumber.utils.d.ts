import BigNumber from 'bignumber.js';
export declare class BigNumberUtils {
    static toWei(value: number | string, tokenDecimals?: number): BigNumber;
    static byDecimals(value: number | string, tokenDecimals?: number): number;
    static byDecimalsString(value: number | string, tokenDecimals?: number): string;
}
