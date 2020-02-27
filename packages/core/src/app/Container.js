import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';

export default ({children, t}) => {
  return (
    <ThemeContextProvider t={t}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ThemeContextProvider>
  );
}