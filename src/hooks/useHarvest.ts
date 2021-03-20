import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Farm } from '../shitz';

const useHarvest = (farm: Farm) => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      basisCash.harvest(farm.contract),
      `Claim ${farm.earnTokenName} from ${farm.contract}`,
    );
  }, [farm, basisCash]);

  return { onReward: handleReward };
};

export default useHarvest;
