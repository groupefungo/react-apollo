import React from 'react'

import useExt from '../ext'
import muiTheme from '../Theme/mui-theme'
import UiContext from '../Context/Context'

export default ({t, children}) => {
  const ext = useExt();
  const {ThemeProvider, createMuiTheme, Container, CssBaseline} = ext;
  const theme = createMuiTheme(t || muiTheme);

  return (
    <UiContext.Provider value={ext}>
      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline/>
          {children}
        </Container>
      </ThemeProvider>
    </UiContext.Provider>
  )
}
