import React from 'react'

import useExt from '../ext'
import muiTheme from '../Theme/mui-theme'
import UiContext from '../Context/Context'

export default ({t, children}) => {
  const ext = useExt();
  const {ThemeProvider, createMuiTheme, Container, CssBaseline, MuiPickersUtilsProvider, DateFnsUtils} = ext;
  const theme = createMuiTheme({...muiTheme, ...t});

  return (
    <UiContext.Provider value={ext}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container fixed disableGutters>
            <CssBaseline/>
            {children}
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </UiContext.Provider>
  )
}
