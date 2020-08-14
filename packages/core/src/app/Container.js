import React from 'react';
import * as PropTypes from 'prop-types';
import AppContextProvider from '.';
import ThemeContextProvider from '../ui';
import ErrorBoundary from "../ui/ErrorBoundary";

const Container = ({useProvideAuth, thm, children, withAuth}) => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider thm={thm}>
        <AppContextProvider useProvideAuth={withAuth ? useProvideAuth : null}>
          {children}
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}

Container.defaultProps = {
  withAuth: true,
}

export default Container;