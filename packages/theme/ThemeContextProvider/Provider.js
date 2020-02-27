"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uses = _interopRequireDefault(require("../Context/uses"));

var _muiTheme = _interopRequireDefault(require("../mui-theme"));

var _UiContext = _interopRequireDefault(require("../Context/UiContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var t = _ref.t,
      children = _ref.children;
  var ThemeProvider = _uses["default"].ThemeProvider,
      createMuiTheme = _uses["default"].createMuiTheme,
      Container = _uses["default"].Container,
      CssBaseline = _uses["default"].CssBaseline;
  var theme = createMuiTheme(t || _muiTheme["default"]);
  console.log('uiUses2', _uses["default"]);
  return _react["default"].createElement(_UiContext["default"].Provider, {
    value: _uses["default"]
  }, _react["default"].createElement(ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(Container, null, _react["default"].createElement(CssBaseline, null), children)));
};

exports["default"] = _default;