"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("../ext"));

var _muiTheme = _interopRequireDefault(require("../Theme/mui-theme"));

var _Context = _interopRequireDefault(require("../Context/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var thm = _ref.thm,
      children = _ref.children;
  var ext = (0, _ext["default"])();
  var ThemeProvider = ext.ThemeProvider,
      createMuiTheme = ext.createMuiTheme,
      CssBaseline = ext.CssBaseline,
      MuiPickersUtilsProvider = ext.MuiPickersUtilsProvider,
      DateFnsUtils = ext.DateFnsUtils;
  var theme = createMuiTheme(_objectSpread({}, _muiTheme["default"], {}, thm));
  return _react["default"].createElement(_Context["default"].Provider, {
    value: ext
  }, _react["default"].createElement(ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(MuiPickersUtilsProvider, {
    utils: DateFnsUtils
  }, _react["default"].createElement(CssBaseline, null), children)));
};

exports["default"] = _default;