"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("react-apollo");

var _jsModulesCore = require("@groupefungo/js-modules-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_reactApollo.ApolloProvider, {
    client: _jsModulesCore.APOLLO_CLIENT
  }, _react["default"].createElement(_jsModulesCore.AppContextProvider, null, children));
};

exports["default"] = _default;