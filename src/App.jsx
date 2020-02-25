import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {APOLLO_CLIENT, AppContextProvider} from '@fungo-js-modules/core';

export default ({children}) => (
  <ApolloProvider client={APOLLO_CLIENT}>
    <AppContextProvider>
      {children}
    </AppContextProvider>
  </ApolloProvider>
);
