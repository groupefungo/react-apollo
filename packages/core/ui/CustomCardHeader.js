"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$createdAt = _ref.createdAt,
      createdAt = _ref$createdAt === void 0 ? '' : _ref$createdAt,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? '' : _ref$category,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? '' : _ref$disabled;

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box;

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var date = new Date(createdAt);

  var backgroundColor = function backgroundColor() {
    return disabled ? "text.disabled" : "secondary.main";
  };

  return _react["default"].createElement(Grid, {
    container: true,
    justify: "space-between",
    spacing: 2
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Box, {
    bgcolor: backgroundColor(),
    py: 0.5,
    px: 1,
    borderRadius: 8,
    color: "background.paper"
  }, date.toLocaleDateString('fr', options))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Typography, {
    color: "textSecondary"
  }, category)));
};

exports["default"] = _default;