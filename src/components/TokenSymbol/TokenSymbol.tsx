import React from 'react';

import BNBLogo from '../../assets/img/bnb.png'
import ACSLogo from '../../assets/img/acs.png'
import Farmer from '../../assets/img/farmer.png'
import SHITZLogo from '../../assets/img/shitz.png'
import BRRLLogo from '../../assets/img/brrl.png'
import REEFLogo from '../../assets/img/reef.png'

const logosBySymbol: {[title: string]: string} = {
  'ACS': ACSLogo,
  'WBNB': BNBLogo,
  'SHITZ-BNB-FLIP': Farmer,
  'SHITZ': SHITZLogo,
  'BRRL': BRRLLogo,
  'REEF': REEFLogo
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 32 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid logo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
