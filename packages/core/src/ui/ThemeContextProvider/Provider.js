import React from 'react'

import useExt from '../ext'
import muiTheme from '../Theme/mui-theme'
import UiContext from '../Context/Context'

export default ({thm, children}) => {
  const ext = useExt();
  const {ThemeProvider, createMuiTheme, CssBaseline, MuiPickersUtilsProvider, DateFnsUtils} = ext;
  const theme = createMuiTheme({...muiTheme, ...thm});

  return (
    <UiContext.Provider value={ext}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline/>
          {children}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </UiContext.Provider>
  )
}
