import { IBlockchainInfo } from '../interfaces/blockchain-info.interface';
import { IBlockchainListPlugin } from '../interfaces/plugins/blockchain-list.plugin.interface';
export declare class LocalBlockchainsPlugin implements IBlockchainListPlugin {
    getPluginType(): 'blockchain-list';
    getBlockchains(): IBlockchainInfo[];
}
