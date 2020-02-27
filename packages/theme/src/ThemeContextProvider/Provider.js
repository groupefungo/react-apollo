import React from 'react'

import uiUses from '../Context/uses'
import muiTheme from '../Context/mui-theme'
import UiContext from '../Context/UiContext'

export default ({t, children}) => {
  const {ThemeProvider, createMuiTheme, Container, CssBaseline} = uiUses;
  const theme = createMuiTheme(t || muiTheme);

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
