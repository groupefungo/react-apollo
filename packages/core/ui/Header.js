"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var title = _ref.title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? '' : _ref$subtitle;

  var _useUiContext = (0, _UseContext["default"])(),
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box;

  return /*#__PURE__*/_react["default"].createElement(Box, {
    my: 3
  }, /*#__PURE__*/_react["default"].createElement(Typography, {
    color: "secondary",
    variant: "h4"
  }, title), /*#__PURE__*/_react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "h6"
  }, subtitle));
};

exports["default"] = _default;