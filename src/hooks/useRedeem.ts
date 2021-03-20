import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import { Farm } from '../shitz';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeem = (farm: Farm) => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    handleTransactionReceipt(basisCash.exit(farm.contract), `Redeem ${farm.contract}`);
  }, [farm, basisCash]);

  return { onRedeem: handleRedeem };
};

export default useRedeem;
