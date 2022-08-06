import { IMetaMascara } from '../../interfaces/metamascara.interface';

export abstract class BaseContract {
  constructor(private web3: IMetaMascara, private abi: any[], private _address: string) {
  }

  get contract() {
    return this.web3.getContract(this.address, this.abi);
  }

  get chainId() {
    return this.web3.networkId;
  }

  get helper() {
    return this.web3;
  }

  get address() {
    return this._address;
  }

  protected dictionaryToArray(dict: any): any[] {
    return Object.keys(dict).map(key => dict[key]);
  }
}
