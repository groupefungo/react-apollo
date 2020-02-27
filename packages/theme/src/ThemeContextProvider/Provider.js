import React from 'react'

import uiUses from '../Context/uses'
import muiTheme from '../mui-theme'
import UiContext from '../Context/UiContext'

export default ({t, children}) => {
  const {ThemeProvider, createMuiTheme, Container, CssBaseline} = uiUses;
  const theme = createMuiTheme(t || muiTheme);

  console.log('uiUses2', uiUses);
  return (
    <UiContext.Provider value={uiUses}>
      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline/>
          {children}
        </Container>
      </ThemeProvider>
    </UiContext.Provider>
  )
}
