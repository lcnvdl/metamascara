import { IBlockchainInfo } from '../interfaces/blockchain-info.interface';
import { IBlockchainListPlugin } from '../interfaces/plugins/blockchain-list.plugin.interface';
interface IChainData {
    name: string;
    chainId: number;
    shortName: string;
    chain: string;
    network: string;
    networkId: number;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpc: string[];
    faucets: string[];
    infoURL: string;
}
/**
 * @description Evm-chains wrapper. Package: https://www.npmjs.com/package/evm-chains .
 */
export declare class EvmChainsPlugin implements IBlockchainListPlugin {
    private getAllChains;
    constructor({ getAllChains }: {
        getAllChains: () => IChainData[];
    });
    getPluginType(): 'blockchain-list';
    getBlockchains(): IBlockchainInfo[];
}
export {};
