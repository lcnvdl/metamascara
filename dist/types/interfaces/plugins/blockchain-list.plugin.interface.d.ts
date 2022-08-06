import { IBlockchainInfo } from '../blockchain-info.interface';
export interface IBlockchainListPlugin {
    getPluginType(): 'blockchain-list';
    getBlockchains(): IBlockchainInfo[];
}
