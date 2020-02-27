import React from 'react'

import appUses from '../Context/uses';
import AppContext from '../Context/AppContext';
import APOLLO_CLIENT from "../Apollo";

export default ({children}) => {
  const {ProvideAuth, Router, ApolloProvider} = appUses;

  return (
    <AppContext.Provider value={appUses}>
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
