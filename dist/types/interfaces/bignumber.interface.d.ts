export interface IBigNumber {
    exponentiatedBy(value: IBigNumber | number | string): IBigNumber;
    dividedBy(value: IBigNumber | number | string): IBigNumber;
    multipliedBy(value: IBigNumber | number | string): IBigNumber;
    toNumber(): number;
    toFixed(): string;
    toString(): string;
}
