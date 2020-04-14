import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

export default ({useProvideAuth, children, t}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider t={t}>
        <AppContextProvider useProvideAuth={useProvideAuth}>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}