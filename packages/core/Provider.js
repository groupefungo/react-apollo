import React from 'react'

import uses from './uses'
import AppContext from './AppContext'

export default ({children}) => {
  const {ProvideAuth, Router} = uses;

  return (
    <AppContext.Provider value={uses}>
      <ProvideAuth>
        <Router>
          {children}
        </Router>
      </ProvideAuth>
    </AppContext.Provider>
  )
};
