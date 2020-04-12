import React, {useEffect} from 'react';
import useAppContext from './UseContext';
import Error from '../ui/Error';
import hasRole from './hasRole';

export default ({component: Component, children, role, hasAccess, ...rest}) => {
  const {Route} = useAppContext();

  const giveAccess = hasAccess || (role && hasRole(role));

  useEffect(() => {
    if (!giveAccess) {
      const el = document.getElementById('restrictedError');
      if (el) el.innerHTML = "Vous n'avez pas le droit.";
    }
  });

  return (
    <Route
      {...rest}
      render={(props) => (
        giveAccess
          ? (Component ? <Component {...props} {...rest} /> : children)
          : <Error id="restrictedError" msg=""/>
      )}
    />
  );
};
