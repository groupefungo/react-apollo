import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {APOLLO_CLIENT, AppContextProvider} from '@groupefungo/react-apollo.core';

export default ({children}) => {
  return (
    <ApolloProvider client={APOLLO_CLIENT}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ApolloProvider>
  );
}
