import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

export default ({useProvideAuth, processingText, thm, children}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider thm={thm}>
        <AppContextProvider
          useProvideAuth={useProvideAuth}
          processingText={processingText}
        >
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}