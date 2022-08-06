import { MetaMascara } from '../classes/metamascara';
import { LocalBlockchainsPlugin } from '../plugins/local-blockchains.plugin';
import { IMetamascaraPlugin } from '../interfaces/plugins/metamascara-plugin.interface';

export class MetaMascaraFactory {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public static defaultPlugins = [
    new LocalBlockchainsPlugin(),
  ];

  private static getWeb3Class() {
    const w = (window as any);
    const web3 = w.Web3 || w.web3;

    if (!web3) {
      throw new Error('MetaMascara requires web3.js. Please install it.');
    }

    return web3;
  }

  static newInstance(detectEthereumProvider?: () => Promise<any>, web3Factory?: (provider: any) => any) {
    const providerDetector = detectEthereumProvider || (window as any).detectEthereumProvider;
    if (!providerDetector) {
      throw new Error('Could not detect Ethereum provider. Please provide a detectEthereumProvider function.');
    }

    const instance = new MetaMascara(web3Factory || MetaMascaraFactory.getWeb3Class(), providerDetector);
    MetaMascaraFactory.defaultPlugins.map(m => m as IMetamascaraPlugin).forEach(m => instance.addPlugin(m));
    return instance;
  }
}
