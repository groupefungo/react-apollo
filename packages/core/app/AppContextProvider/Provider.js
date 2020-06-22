"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("../ext"));

var _Context = _interopRequireDefault(require("../Context/Context"));

var _Apollo = _interopRequireDefault(require("../Apollo"));

var _Dialog = require("../../ui/Dialog/Dialog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var useProvideAuth = _ref.useProvideAuth,
      children = _ref.children;
  var appExt = (0, _ext["default"])();
  var ProvideAuth = appExt.ProvideAuth,
      Router = appExt.Router,
      ApolloProvider = appExt.ApolloProvider;
  return /*#__PURE__*/_react["default"].createElement(_Context["default"].Provider, {
    value: appExt
  }, /*#__PURE__*/_react["default"].createElement(_Dialog.Dialog, null), /*#__PURE__*/_react["default"].createElement(ApolloProvider, {
    client: _Apollo["default"]
  }, /*#__PURE__*/_react["default"].createElement(ProvideAuth, {
    useProvideAuth: useProvideAuth
  }, /*#__PURE__*/_react["default"].createElement(Router, null, children))));
};

exports["default"] = _default;