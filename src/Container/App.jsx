import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {APOLLO_CLIENT, AppContextProvider} from '@groupefungo/react-apollo.core';
import {ThemeContextProvider} from '@groupefungo/react-apollo.theme';

export default ({children, t}) => {
  return (
    <ThemeContextProvider t={t}>
      <ApolloProvider client={APOLLO_CLIENT}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </ApolloProvider>
    </ThemeContextProvider>
  );
}