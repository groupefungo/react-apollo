import React, { useState, useEffect, useContext, createContext } from 'react';
import useUserGql from '../UseUserGql/useUserGql';

const authContext = createContext(null);

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const { data } = useUserGql().useMeQuery();

  useEffect(() => {
    if (data && data.me) {
      setUser(data.me);
    }
  }, [data]);

  const signout = () => {
    const meta = document.querySelector("meta[name='csrf-token']");
    const token = meta.getAttribute('content');
    return fetch('/users/sign_out', { method: 'DELETE', headers: { 'X-CSRF-Token': token } })
      .then(() => {
        setUser(false);
        window.location.href = '/';
        return true;
      });
  };

  // Return the user object and auth methods
  return {
    user,
    signout,
  };
}

// Provider component that wraps your Container and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
