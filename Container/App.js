"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("@groupefungo/react-apollo.core");

var _reactApollo2 = require("@groupefungo/react-apollo.theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      t = _ref.t;
  return _react["default"].createElement(_reactApollo2.ThemeContextProvider, {
    t: t
  }, _react["default"].createElement(_reactApollo.AppContextProvider, null, children));
};

exports["default"] = _default;