"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _ui = _interopRequireDefault(require("../ui"));

var _ErrorBoundary = _interopRequireDefault(require("../ui/ErrorBoundary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var useProvideAuth = _ref.useProvideAuth,
      children = _ref.children,
      t = _ref.t;
  return _react["default"].createElement(_ErrorBoundary["default"], null, _react["default"].createElement(_ui["default"], {
    t: t
  }, _react["default"].createElement(_["default"], {
    useProvideAuth: useProvideAuth
  }, children)));
};

exports["default"] = _default;