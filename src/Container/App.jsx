import React from 'react';
import {AppContextProvider} from '@groupefungo/react-apollo.core';
import {ThemeContextProvider} from '@groupefungo/react-apollo.theme';

export default ({children, t}) => {
  return (
    <ThemeContextProvider t={t}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ThemeContextProvider>
  );
}