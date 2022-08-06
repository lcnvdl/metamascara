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
export class EvmChainsPlugin implements IBlockchainListPlugin {
  private getAllChains: () => IChainData[];

  constructor({ getAllChains }: { getAllChains: () => IChainData[] }) {
    this.getAllChains = getAllChains;
  }

  getPluginType(): 'blockchain-list' {
    return 'blockchain-list';
  }

  getBlockchains(): IBlockchainInfo[] {
    return this.getAllChains().map(chain => {
      return {
        id: chain.chainId,
        name: chain.name,
        symbol: chain.nativeCurrency.symbol,
        explorer: chain.infoURL,
        rpc: (chain.rpc && chain.rpc.length > 0) ? chain.rpc[0] : null,
      } as IBlockchainInfo;
    });
  }
}

