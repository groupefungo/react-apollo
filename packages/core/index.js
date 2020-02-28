"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Container = _interopRequireDefault(require("./app/Container"));

var _Body = _interopRequireDefault(require("./app/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyApp = function MyApp() {
  return _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_Body["default"], null));
};

_reactDom["default"].render(_react["default"].createElement(MyApp, null), document.getElementById('root'));

console.log(process.env.NODE_ENV);