import React, { useCallback, useEffect, useState } from 'react';
import Context from './context';
import useBasisCash from '../../hooks/useBasisCash';
import { Farm } from '../../shitz';
import config, { farmDefinitions } from '../../config';

const Farms: React.FC = ({ children }) => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const basisCash = useBasisCash();

  const fetchPools = useCallback(async () => {
    const farms: Farm[] = [];

    for (const bankInfo of Object.values(farmDefinitions)) {
      if (bankInfo.finished) {
        if (!basisCash.isUnlocked) continue;

        // only show pools staked by user
        const balance = await basisCash.stakedBalanceOnFarm(
          bankInfo.contract,
          basisCash.myAccount,
        );
        if (balance.lte(0)) {
          continue;
        }
      }
      farms.push({
        ...bankInfo,
        address: config.deployments[bankInfo.contract].address,
        depositToken: basisCash.externalTokens[bankInfo.depositTokenName],
        earnToken: bankInfo.earnTokenName == 'BAC' ? basisCash.BNB : basisCash.BNB,
      });
    }
    farms.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setFarms(farms);
  }, [basisCash, basisCash?.isUnlocked, setFarms]);

  useEffect(() => {
    if (basisCash) {
      fetchPools().catch((err) => console.error(`Failed to fetch farms: ${err.stack}`));
    }
  }, [basisCash, basisCash?.isUnlocked, fetchPools]);

  return <Context.Provider value={{ farms }}>{children}</Context.Provider>;
};

export default Farms;
