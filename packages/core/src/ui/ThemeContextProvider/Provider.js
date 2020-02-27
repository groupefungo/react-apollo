import React from 'react'

import uiUses from '../ext'
import muiTheme from '../Theme/mui-theme'
import UiContext from '../Context/Context'

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
