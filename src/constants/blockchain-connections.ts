import { IAddNetworkInfo } from "../interfaces/add-network-info.interface";

export const rinkebyAddNetworkInfo: IAddNetworkInfo = {
  chainId: '0x4',
  chainName: 'ETH Rinkeby Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['https://rinkeby.infura.io/v3/'],
  blockExplorerUrls: ['https://rinkeby.etherscan.io']
};

export const polygonAddNetworkInfo: IAddNetworkInfo = {
  chainId: '0x89', // 137
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://explorer.matic.network']
};

export const polygonTestnetAddNetworkInfo: IAddNetworkInfo = {
  chainId: '0x13881', // 80001
  chainName: 'Polygon Testnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com']
};

export const bscAddNetworkInfo: IAddNetworkInfo = {
  chainId: '0x38',
  chainName: 'BNB Smart Chain Mainnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://bsc-dataseed1.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com/']
};

export const bscTestnetAddNetworkInfo: IAddNetworkInfo = {
  chainId: '0x61',
  chainName: 'BNB Smart Chain Testnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  blockExplorerUrls: ['https://testnet.bscscan.com/']
};

export const blockchainConnections = {
  4: rinkebyAddNetworkInfo,
  56: bscAddNetworkInfo,
  97: bscTestnetAddNetworkInfo,
  137: polygonAddNetworkInfo,
  80001: polygonTestnetAddNetworkInfo,
};
