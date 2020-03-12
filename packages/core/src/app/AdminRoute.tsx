import React from 'react';
import useAppContext from './UseContext';
import Error from '../ui/Error';
import hasRole from './hasRole';

interface IProps {
  children: React.ReactNode;
  component: any;
  // any other props that come into the component
}

export default ({ component: Component, children, ...rest }: IProps) => {
  const { Route } = useAppContext();
  const admin = hasRole('admin');
  return (
    <Route
      {...rest}
      render={(props: object) => (
        admin
          ? <Component {...props} {...rest} />
          : <Error msg="Vous n'avez pas le droit." />
      )}
    />
  );
};
