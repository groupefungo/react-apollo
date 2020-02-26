"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = require("lodash");

var _otherFile = _interopRequireDefault(require("./Container/otherFile.js"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _otherFile["default"])(2, 5));
console.log((0, _lodash.map)([1, 2], function (i) {
  return i + 1;
}));

var MyApp = function MyApp() {
  return _react["default"].createElement(_Container["default"], null, "asdfasdfasdf");
};

_reactDom["default"].render(_react["default"].createElement(MyApp, null), document.getElementById('root'));

console.log(process.env.NODE_ENV);