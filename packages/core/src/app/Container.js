import React from 'react';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

export default ({useProvideAuth, processingText, children, t}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider t={t}>
        <AppContextProvider useProvideAuth={useProvideAuth} processingText={processingText}>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}