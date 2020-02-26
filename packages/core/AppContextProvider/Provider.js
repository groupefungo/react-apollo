"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = require("../Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  var ProvideAuth = _Context.appUses.ProvideAuth,
      Router = _Context.appUses.Router;
  return _react["default"].createElement(_Context.AppContext.Provider, {
    value: _Context.appUses
  }, _react["default"].createElement(ProvideAuth, null, _react["default"].createElement(Router, null, children)));
};

exports["default"] = _default;