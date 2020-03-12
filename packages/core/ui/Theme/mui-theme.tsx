"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: _theme["default"].app.mainColor
      },
      colorSecondary: {
        backgroundColor: _theme["default"].app.backgroundLightColor
      }
    },
    MuiContainer: {
      maxWidthLg: {
        '@media (min-width: 900px)': {
          maxWidth: '1200px'
        }
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: _theme["default"].app.ctaButtonBgColor,
        color: _theme["default"].app.white,
        '&:hover': {
          backgroundColor: _theme["default"].app.ctaButtonBgColorHover
        },
        '&.cta-add-location': {
          backgroundColor: '#e0e0e0',
          color: 'rgba(0, 0, 0, 0.87)',
          height: '43px',
          width: '100%',
          '&:hover': {
            backgroundColor: '#d5d5d5'
          },
          '& $label': {
            display: 'flex',
            alignItems: 'end',
            '& svg': {
              marginRight: '5px'
            }
          }
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: _theme["default"].app.ctaButtonBgColorHover
        }
      },
      outlined: {
        borderColor: _theme["default"].app.ctaButtonBgColor,
        color: _theme["default"].app.ctaButtonBgColor
      }
    },
    MuiFab: {
      root: {
        color: 'white',
        backgroundColor: _theme["default"].app.ctaButtonBgColor,
        '&:hover': {
          backgroundColor: _theme["default"].app.ctaButtonBgColorHover
        }
      }
    },
    MuiDialogActions: {
      root: {
        margin: '24px 20px'
      }
    },
    MuiDialogContent: {
      root: {
        padding: '15px 24px 24px'
      }
    },
    MuiDialogTitle: {
      root: {
        padding: '24px'
      }
    },
    MuiFormControl: {
      root: {
        '&.filter-width': {
          width: '125px',
          '@media (min-width: 992px)': {
            width: '217px'
          }
        },
        '&.two-thirds': {
          width: '73%'
        }
      }
    },
    MuiFormGroup: {
      root: {
        '&.form-group-disabled': {
          opacity: '.3'
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&$error': {
          display: 'block'
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#006F9C !important'
        }
      }
    },
    MuiIconButton: {
      root: {
        color: _theme["default"].app.iconButtonColor
      }
    },
    MuiOutlinedInput: {
      root: {
        '&$focused': {
          '& $notchedOutline': {
            borderColor: '#006F9C'
          }
        }
      },
      input: {
        padding: '12.5px 25px'
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          background: 'none'
        }
      }
    },
    MuiSvgIcon: {
      root: {
        '&.prepared-icon-color': {
          color: _theme["default"].app.preparedIconColor
        },
        '&.menu-icon-color': {
          color: _theme["default"].app.iconButtonColor
        }
      }
    },
    MuiTab: {
      root: {
        '&:hover': {
          backgroundColor: '#fbfbfb'
        },
        '&$selected': {
          color: "".concat(_theme["default"].app.mainColor, " !important")
        }
      },
      textColorPrimary: {
        color: _theme["default"].app.tabsUnselectedColor
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: _theme["default"].app.mainColor
      }
    },
    MuiTableCell: {
      root: {
        whiteSpace: 'nowrap',
        padding: '4px 0px 4px 25px',
        textOverflow: 'ellipsis',
        '&.action-cell': {
          paddingRight: '25px',
          textAlign: 'left',
          width: '8%'
        },
        '&.icon-cell': {
          padding: 0,
          textAlign: 'center',
          width: '8%'
        },
        '&.province-cell': {
          paddingRight: '25px',
          width: '8%'
        },
        '&.zipcode-cell': {
          width: '8%'
        },
        '&.no-pointer': {
          cursor: 'default !important'
        }
      }
    },
    MuiTablePagination: {
      caption: {
        color: _theme["default"].app.lightGrey
      },
      select: {
        color: _theme["default"].app.lightGrey,
        fontSize: '0.750em'
      },
      toolbar: {
        padding: '60px 24px'
      }
    },
    MuiTableRow: {
      root: {
        height: '60px',
        transition: 'background-color .25s ease-in-out',
        '&:nth-child(even)': {
          backgroundColor: _theme["default"].app.tableRowsOddBgColor
        },
        '&.link-row:hover': {
          backgroundColor: '#e7f8ff',
          cursor: 'pointer'
        }
      }
    },
    MuiTableSortLabel: {
      root: {
        fontWeight: 400
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
  },
  palette: {
    primary: {
      light: '#05293f',
      main: _theme["default"].app.brandColor,
      dark: '#0073cb',
      contrastText: '#fff'
    },
    secondary: {
      light: '#8fffff',
      main: '#5CC0EC',
      dark: '#00b0bb',
      contrastText: '#fff'
    },
    background: {
      "default": _theme["default"].app.bodyBackground
    }
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: '#0000008a',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  typography: {
    useNextVariants: true,
    body1: {
      fontSize: '0.8rem'
    },
    display1: {
      color: _theme["default"].app.titleFontColor,
      fontSize: '1.2rem',
      fontWeight: 300,
      lineHeight: '1.20588em'
    },
    title: {
      color: 'primary',
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '1.5em'
    },
    h1: {
      color: _theme["default"].app.titleFontColor,
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '1.5em'
    },
    caption: {
      fontStyle: 'italic'
    }
  }
};
exports["default"] = _default;