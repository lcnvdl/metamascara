import { blockchains } from '../constants/blockchains';
import { IBlockchainInfo } from '../interfaces/blockchain-info.interface';
import { IBlockchainListPlugin } from '../interfaces/plugins/blockchain-list.plugin.interface';

export class LocalBlockchainsPlugin implements IBlockchainListPlugin {
  getPluginType(): 'blockchain-list' {
    return 'blockchain-list';
  }

  getBlockchains(): IBlockchainInfo[] {
    const ids: number[] = Object.keys(blockchains).map(m => +m);
    return ids.map(id => {
      return {
        id,
        name: blockchains[id].name,
        symbol: blockchains[id].symbol,
        explorer: blockchains[id].explorer,
        rpc: blockchains[id].rpc
      };
    });
  }
}