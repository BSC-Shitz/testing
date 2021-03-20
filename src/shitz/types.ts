import ERC20 from './ERC20';

export type ContractName = string;

export interface FarmInfo {
  name: string;
  contract: ContractName;
  depositTokenName: ContractName;
  earnTokenName: ContractName;
  sort: number;
  finished: boolean;
}

export interface Farm extends FarmInfo {
  address: string;
  depositToken: ERC20;
  earnToken: ERC20;
}

export type TokenStat = {
  priceInDAI: string;
  totalSupply: string;
};
