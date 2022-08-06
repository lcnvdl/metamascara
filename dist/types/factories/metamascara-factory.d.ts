import { MetaMascara } from '../classes/metamascara';
import { LocalBlockchainsPlugin } from '../plugins/local-blockchains.plugin';
export declare class MetaMascaraFactory {
    static defaultPlugins: LocalBlockchainsPlugin[];
    private static getWeb3Class;
    static newInstance(detectEthereumProvider?: () => Promise<any>, web3Factory?: (provider: any) => any): MetaMascara;
}
