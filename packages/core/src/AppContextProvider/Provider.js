import React from 'react'

import {appUses, AppContext} from '../Context'

export default ({children}) => {
  const {ProvideAuth, Router} = appUses;

  return (
    <AppContext.Provider value={appUses}>
      <ProvideAuth>
        <Router>
          {children}
        </Router>
      </ProvideAuth>
    </AppContext.Provider>
  )
};
