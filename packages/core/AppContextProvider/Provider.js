"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uses = _interopRequireDefault(require("../Context/uses"));

var _AppContext = _interopRequireDefault(require("../Context/AppContext"));

var _Apollo = _interopRequireDefault(require("../Apollo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  var ProvideAuth = _uses["default"].ProvideAuth,
      Router = _uses["default"].Router,
      ApolloProvider = _uses["default"].ApolloProvider;
  return _react["default"].createElement(_AppContext["default"].Provider, {
    value: _uses["default"]
  }, _react["default"].createElement(ApolloProvider, {
    client: _Apollo["default"]
  }, _react["default"].createElement(ProvideAuth, null, _react["default"].createElement(Router, null, children))));
};

exports["default"] = _default;