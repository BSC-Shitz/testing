import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Farm from '../Bank';
import FarmCards from './FarmCards';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import Button from '../../components/Button';
import styled from 'styled-components';

const Farms: React.FC = () => {
  const { path } = useRouteMatch();
  const { account, connect } = useWallet();

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <PageHeader icon={'👋'} title="WELCOME" subtitle="BSC SHITZ is a token on the Binance Smart Chain offering duration based staking pools for SHITZ/BNB Liquidity Providers. Stake your LP Below" />
          {!!account ? (
            <FarmCards />
          ) : (
            <Center>
              <Button onClick={() => connect('injected')} text="Unlock Wallet" />
            </Center>
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <Farm />
        </Route>
      </Page>
    </Switch>
  );
};

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Farms;
