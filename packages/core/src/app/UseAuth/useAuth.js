import React, {useContext, createContext} from 'react';

const authContext = createContext(null);

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider component that wraps your Container and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({useProvideAuth, children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
