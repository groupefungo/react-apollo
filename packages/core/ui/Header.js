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

  return _react["default"].createElement(Box, {
    my: 3
  }, _react["default"].createElement(Typography, {
    color: "secondary",
    variant: "h4"
  }, title), _react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "h6"
  }, subtitle));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9IZWFkZXIudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwic3VidGl0bGUiLCJUeXBvZ3JhcGh5IiwiQm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZSx3QkFBOEI7QUFBQSxNQUEzQkEsS0FBMkIsUUFBM0JBLEtBQTJCO0FBQUEsMkJBQXBCQyxRQUFvQjtBQUFBLE1BQXBCQSxRQUFvQiw4QkFBVCxFQUFTOztBQUFBLHNCQUNmLDZCQURlO0FBQUEsTUFDbkNDLFVBRG1DLGlCQUNuQ0EsVUFEbUM7QUFBQSxNQUN2QkMsR0FEdUIsaUJBQ3ZCQSxHQUR1Qjs7QUFFM0MsU0FDRSxnQ0FBQyxHQUFEO0FBQUssSUFBQSxFQUFFLEVBQUU7QUFBVCxLQUNFLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLEtBQUssRUFBQyxXQUFsQjtBQUE4QixJQUFBLE9BQU8sRUFBQztBQUF0QyxLQUNHSCxLQURILENBREYsRUFJRSxnQ0FBQyxVQUFEO0FBQVksSUFBQSxLQUFLLEVBQUMsZUFBbEI7QUFBa0MsSUFBQSxPQUFPLEVBQUM7QUFBMUMsS0FDR0MsUUFESCxDQUpGLENBREY7QUFVRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIHN1YnRpdGxlID0gJycgfSkgPT4ge1xuICBjb25zdCB7IFR5cG9ncmFwaHksIEJveCB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPEJveCBteT17M30+XG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==