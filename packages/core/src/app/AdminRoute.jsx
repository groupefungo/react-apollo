import React from 'react';
import useAppContext from './UseContext';
import Error from '../ui/Error';
import hasRole from './hasRole';

export default ({ component: Component, children, ...rest }) => {
  const { Route } = useAppContext();
  const admin = hasRole('admin');
  return (
    <Route
      {...rest}
      render={(props) => (
        admin
          ? <Component {...props} {...rest} />
          : <Error msg="Vous n'avez pas le droit." />
      )}
    />
  );
};
