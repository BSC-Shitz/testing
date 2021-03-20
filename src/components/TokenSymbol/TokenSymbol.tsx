import React from 'react';

import BNBLogo from '../../assets/img/bnb.png'
import Farmer from '../../assets/img/farmer.png'


const logosBySymbol: {[title: string]: string} = {
  'BNB': BNBLogo,
  'SHITZ-BNB-FLIP': Farmer
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 64 }) => {
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
