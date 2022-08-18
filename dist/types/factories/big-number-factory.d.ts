import { IBigNumber } from '../interfaces/bignumber.interface';
export declare class BigNumberFactory {
    static newInstance(value: string | number, base?: number): IBigNumber;
}
