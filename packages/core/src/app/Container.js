import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

export default ({useProvideAuth, thm, children}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider thm={thm}>
        <AppContextProvider useProvideAuth={useProvideAuth}>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}