import React from 'react'

import useExt from '../ext';
import AppContext from '../Context';
import APOLLO_CLIENT from "../Apollo";

export default ({children}) => {
  const appExt = useExt();
  const {ProvideAuth, Router, ApolloProvider} = appExt;

  return (
    <AppContext.Provider value={appExt}>
      <ApolloProvider client={APOLLO_CLIENT}>
        <ProvideAuth>
          <Router>
            {children}
          </Router>
        </ProvideAuth>
      </ApolloProvider>
    </AppContext.Provider>
  )
};
