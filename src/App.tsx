import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UseWalletProvider } from '@binance-chain/bsc-use-wallet';

import FarmsProvider from './contexts/Farms';
import BasisCashProvider from './contexts/BasisCashProvider';
import ModalsProvider from './contexts/Modals';

import Farms from './views/Farms';
import Home from './views/Home';

import store from './state';
import theme from './theme';
import config from './config';
import Updaters from './state/Updaters';
import Popups from './components/Popups';

const App: React.FC = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/farms" />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
};

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider chainId={config.chainId}>
        <Provider store={store}>
          <Updaters />
          <BasisCashProvider>
            <ModalsProvider>
              <FarmsProvider>
                <>
                  <Popups />
                  {children}
                </>
              </FarmsProvider>
            </ModalsProvider>
          </BasisCashProvider>
        </Provider>
      </UseWalletProvider>
    </ThemeProvider>
  );
};

export default App;
