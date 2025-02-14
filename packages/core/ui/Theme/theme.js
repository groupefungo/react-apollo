"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var variables = {
  backgroundLightColor: '#fdfdfd',
  bodyBackground: '#F8F8F8',
  brandColor: '#006F9C',
  ctaButtonBgColor: '#E667CE',
  ctaButtonBgColorHover: '#b954a6',
  curentFontColor: '#414141',
  darkGreen: '#2A3228',
  dashboardColumnBgColor: '#f1f1f1',
  fadedIconColor: '#b9b9b9',
  headerWrapperBgColor: '#f3f3f3',
  iconButtonColor: '#21a8d9',
  lightFontColor: '#757575',
  darkBlueFontColor: '#2b4e5d',
  lightIconColor: '#D2D2D2',
  lightGrey: 'rgba(0,0,0,.5)',
  mainFont: '\'Roboto\', sans-serif',
  mainColor: '#006F9C',
  outlinedInputPadding: '',
  preparedIconColor: '#00D76C',
  tabsUnselectedColor: '#717171',
  tableRowsOddBgColor: '#f7f7f7',
  titleFontColor: '#494949',
  warningColor: '#FF4C82',
  white: '#FFF',
  chipgreen: {
    border: '#CFEECB',
    color: '#417D39',
    bkg: '#E2FFDE'
  },
  chipblue: {
    border: '#B1EAF6',
    color: '#4AA1B5',
    bkg: '#DEF9FF'
  },
  chipyellow: {
    border: '#F0F357',
    color: '#79780F',
    bkg: '#F5FFDA'
  },
  chippurple: {
    border: '#C7ABE6',
    color: '#8B74A4',
    bkg: '#EFE0FF'
  },
  chiporange: {
    border: '#C8A18A',
    color: '#AC9181',
    bkg: '#FEE8DB'
  },
  taskStatusColor: {
    COMPLETED: '#02C8A7',
    TODO: '#ffffff00',
    undispatched: '#ff4c4c',
    IN_PROGRESS: '#F9BE02',
    INTERRUPTED: '#D23C3C'
  },
  taskStatusTextColor: {
    COMPLETED: '#013127',
    TODO: '#5a5a5a',
    undispatched: '#ffffff',
    IN_PROGRESS: '#2e2102',
    INTERRUPTED: '#ffffff'
  },
  badgeFlowColor: {
    1: '#C2C1A1',
    2: '#A1C2B9',
    3: '#A1A1C2',
    4: '#C89FA0',
    5: '#CBCBCB'
  },
  inputBorderColor: '#DDDDDD',
  inputBorderRadius: '3px',
  inputPadding: '10px',
  breakpoint: {
    xs: '@media (min-width: 375px)',
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px)',
    xl: '@media (min-width: 1200px)',
    xxl: '@media (min-width: 1440px)'
  }
};
var theme = {
  app: _objectSpread({}, variables)
};
var _default = theme;
exports["default"] = _default;