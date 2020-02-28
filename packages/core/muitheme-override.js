"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  palette: {
    primary: {
      main: '#0B2D49',
      contrastText: '#fff'
    },
    secondary: {
      main: '#B4482C',
      contrastText: '#fff'
    }
  },
  text: {
    primary: '#0000008a',
    secondary: '#262626',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  typography: {
    useNextVariants: true,
    body1: {
      fontSize: '0.8rem'
    },
    display1: {
      fontSize: '1.2rem',
      fontWeight: 300,
      lineHeight: '1.20588em'
    },
    title: {
      color: 'primary',
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: '1.20588em'
    },
    h1: {
      color: 'primary',
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '1.5em'
    },
    caption: {
      fontStyle: 'italic'
    }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#00000'
      }
    },
    MuiCard: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 15,
        paddingBottom: 2,
        width: 'inherit',
        minHeight: 225,
        borderRadius: 15
      }
    },
    MuiCardContent: {
      root: {
        display: 'flex',
        width: 'inherit',
        flexDirection: 'column',
        wordBreak: 'break-word',
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 2,
        marginTop: 5
      }
    },
    MuiCardHeader: {
      root: {
        paddingTop: 0,
        paddingLeft: 2,
        paddingBottom: 2,
        marginTop: 10
      }
    },
    MuiCardActions: {
      root: {
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: 0
      }
    },
    MuiChip: {
      label: {
        maxWidth: 100,
        textOverflow: 'ellipsis'
      }
    }
  }
};
exports["default"] = _default;