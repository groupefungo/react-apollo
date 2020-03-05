import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

export default ({children, t}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider t={t}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}