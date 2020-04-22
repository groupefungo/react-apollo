import React from 'react'

import useExt from '../ext';
import AppContext from '../Context/Context';
import APOLLO_CLIENT from "../Apollo";
import {Dialog} from "../../ui/Dialog/Dialog";

export default ({useProvideAuth, processingText, children}) => {
  const appExt = useExt();
  const {ProvideAuth, Router, ApolloProvider} = appExt;

  return (
    <AppContext.Provider value={appExt}>
      <Dialog contentText={processingText}/>
      <ApolloProvider client={APOLLO_CLIENT}>
        <ProvideAuth useProvideAuth={useProvideAuth}>
          <Router>
            {children}
          </Router>
        </ProvideAuth>
      </ApolloProvider>
    </AppContext.Provider>
  )
};
