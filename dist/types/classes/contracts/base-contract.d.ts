import { IMetaMascara } from '../../interfaces/metamascara.interface';
export declare abstract class BaseContract {
    private web3;
    private abi;
    private _address;
    constructor(web3: IMetaMascara, abi: any[], _address: string);
    get contract(): any;
    get chainId(): number;
    get helper(): IMetaMascara;
    get address(): string;
    protected dictionaryToArray(dict: any): any[];
}
