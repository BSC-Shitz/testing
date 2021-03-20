import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import { Farm } from '../shitz';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useStake = (farm: Farm) => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, farm.depositToken.decimal);
      handleTransactionReceipt(
        basisCash.stake(farm.contract, amountBn),
        `Stake ${amount} ${farm.depositTokenName} to ${farm.contract}`,
      );
    },
    [farm, basisCash],
  );
  return { onStake: handleStake };
};

export default useStake;
