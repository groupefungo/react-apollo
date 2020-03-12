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

var _default = function _default(_ref) {
  var t = _ref.t,
      children = _ref.children;
  var ext = (0, _ext["default"])();
  var ThemeProvider = ext.ThemeProvider,
      createMuiTheme = ext.createMuiTheme,
      Container = ext.Container,
      CssBaseline = ext.CssBaseline;
  var theme = createMuiTheme(t || _muiTheme["default"]);
  return _react["default"].createElement(_Context["default"].Provider, {
    value: ext
  }, _react["default"].createElement(ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(Container, {
    fixed: true,
    disableGutters: true
  }, _react["default"].createElement(CssBaseline, null), children)));
};

exports["default"] = _default;