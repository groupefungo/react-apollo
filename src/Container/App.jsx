import React from 'react';
import {AppContextProvider, ThemeContextProvider} from '@groupefungo/react-apollo.core';

export default ({children, t}) => {
  return (
    <ThemeContextProvider t={t}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ThemeContextProvider>
  );
}