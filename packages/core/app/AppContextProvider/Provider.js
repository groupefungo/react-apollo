"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("../ext"));

var _Context = _interopRequireDefault(require("../Context/Context"));

var _Apollo = _interopRequireDefault(require("../Apollo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  var ProvideAuth = _ext["default"].ProvideAuth,
      Router = _ext["default"].Router,
      ApolloProvider = _ext["default"].ApolloProvider;
  return _react["default"].createElement(_Context["default"].Provider, {
    value: _ext["default"]
  }, _react["default"].createElement(ApolloProvider, {
    client: _Apollo["default"]
  }, _react["default"].createElement(ProvideAuth, null, _react["default"].createElement(Router, null, children))));
};

exports["default"] = _default;