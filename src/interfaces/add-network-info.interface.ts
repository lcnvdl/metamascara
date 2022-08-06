export interface IAddNetworkInfo {
  chainId: string;
  chainName: string;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export interface INativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}
