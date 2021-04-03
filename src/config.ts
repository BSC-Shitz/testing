import { ChainId } from 'belugaswap-sdk';
import { Configuration } from './shitz/config';
import { FarmInfo } from './shitz';
import { formatUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: ChainId.BSC,
    etherscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./shitz/deployments/deployments.mainnet.json'),
    externalTokens: {
      // Add tokens here for deposit tokens like so:
      // 'CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18]
      'SHITZ-BNB-FLIP': ['0x8Fd8b18327431998053B651A9df0967d96d28dFd', 18]
    },
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7,
  },
};

export const farmDefinitions: { [contractName: string]: FarmInfo } = {
  // Farms go here in the following format:
  /*
  SomePoolName: {
    name: "Some shit here",
    contract: "Name of the farming contract as defined in deployments.json",
    depositTokenName: "Name of the deposit token, defined above"
    earnTokenName: "Token you earn",
    finished: true or false,
    sort: number, position of the card in the list
  }
  */
  SHITZLPPool: {
    name: "THIS POOL IS OVER PLEASE UNSTAKE",
    contract: "ShitzLP",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "WBNB",
    finished: false,
    sort: 6
  },
  SHITZLPPoolACS: {
    name: "Stake SHITZ/BNB FLIP, earn ACS",
    contract: "SHITZLPPoolACS",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "ACS",
    finished: false,
    sort: 5
  },
  SHITZLPP: {
    name: "Stake SHITZ/BNB FLIP, earn SHITZ",
    contract: "SHITZLPP",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "SHITZ",
    finished: false,
    sort: 3
  },
  SHITZLPBrrl: {
    name: "Stake SHITZ/BNB FLIP, earn BRRL",
    contract: "SHITZLPBrrl",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "BRRL",
    finished: false,
    sort: 1
  },
  SHITZLPReef: {
    name: "Stake SHITZ/BNB FLIP, earn REEF",
    contract: "SHITZLPReef",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "REEF",
    finished: false,
    sort: 4
  },
  SHITZLPPb: {
    name: "Stake SHITZ/BNB FLIP, earn PB 2114",
    contract: "SHITZLPPb",
    depositTokenName: "SHITZ-BNB-FLIP",
    earnTokenName: "PB 2114",
    finished: false,
    sort: 2
  }
};

export default configurations['production'];
