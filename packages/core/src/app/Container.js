import React from 'react';
import * as PropTypes from 'prop-types';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

const Container = ({useProvideAuth, thm, children, withAuth, customClient}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider thm={thm}>
        <AppContextProvider useProvideAuth={withAuth ? useProvideAuth : null} customClient={customClient}>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}

Container.defaultProps = {
  withAuth: true,
  customClient: null,
}

export default Container;