import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useWallet } from '@binance-chain/bsc-use-wallet';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useFarm from '../../hooks/useFarm';
import useRedeem from '../../hooks/useRedeem';
import { Farm as BankEntity } from '../../shitz';

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));

  const { bankId } = useParams();
  const bank = useFarm(bankId);

  const { account } = useWallet();
  const { onRedeem } = useRedeem(bank);

  return account && bank ? (
    <>
      <PageHeader
        icon="💩"
        subtitle={`Deposit ${bank?.depositTokenName} and earn ${bank?.earnTokenName}`}
        title={bank?.name}
      />
      <StyledBank>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest bank={bank} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake bank={bank} />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <div>
          <Button onClick={onRedeem} text="Harvest & Withdraw" />
        </div>
        <Spacer size="lg" />
      </StyledBank>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader
        icon="🏚"
        title="Not Found"
        subtitle="You've hit a non-existant farm."
      />
    </Center>
  );
};

const UnlockWallet = () => {
  const { connect } = useWallet();
  return (
    <Center>
      <Button onClick={() => connect('injected')} text="Unlock Wallet" />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledUniswapLPGuide = styled.div`
  margin: -24px auto 48px;
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
