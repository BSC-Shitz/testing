import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import { Farm } from '../shitz';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useWithdraw = (farm: Farm) => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, farm.depositToken.decimal);
      handleTransactionReceipt(
        basisCash.unstake(farm.contract, amountBn),
        `Withdraw ${amount} ${farm.depositTokenName} from ${farm.contract}`,
      );
    },
    [farm, basisCash],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdraw;
