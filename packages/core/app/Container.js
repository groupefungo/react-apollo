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
      thm = _ref.thm,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ErrorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(_ui["default"], {
    thm: thm
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    useProvideAuth: useProvideAuth
  }, children)));
};

exports["default"] = _default;