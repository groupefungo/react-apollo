"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Container = _interopRequireDefault(require("./app/Container"));

var _Body = _interopRequireDefault(require("./app/examples/Body"));

var _useProvideAuth = _interopRequireDefault(require("./useProvideAuth"));

var _muithemeOverride = _interopRequireDefault(require("./muitheme-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyApp = function MyApp() {
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    t: _muithemeOverride["default"],
    useProvideAuth: _useProvideAuth["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], null));
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(MyApp, null), document.getElementById('root'));

console.log(process.env.NODE_ENV);