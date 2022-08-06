import { IBlockchainInfo } from './blockchain-info.interface';

export interface IMetaMascara {
  isConnected: boolean;
  networkId: number;
  networkName: string;
  blockchains: Record<number, IBlockchainInfo>;
  blockchainsList: IBlockchainInfo[];
  connect(): Promise<boolean>;
  getContract(address: string, abi: any): any;
}