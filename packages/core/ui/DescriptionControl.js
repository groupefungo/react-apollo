"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var className = _ref.className,
      textFieldAttrs = _objectWithoutProperties(_ref, ["className"]);

  var _useUiContext = (0, _UseContext["default"])(),
      TextField = _useUiContext.TextField;

  return _react["default"].createElement(TextField, _extends({
    className: className,
    fullWidth: true,
    label: "Description",
    type: "description",
    name: "description",
    variant: "outlined",
    multiline: true
  }, textFieldAttrs));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9EZXNjcmlwdGlvbkNvbnRyb2wudHN4Il0sIm5hbWVzIjpbImNsYXNzTmFtZSIsInRleHRGaWVsZEF0dHJzIiwiVGV4dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7ZUFFZSx3QkFBc0M7QUFBQSxNQUFuQ0EsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBckJDLGNBQXFCOztBQUFBLHNCQUM3Qiw2QkFENkI7QUFBQSxNQUMzQ0MsU0FEMkMsaUJBQzNDQSxTQUQyQzs7QUFFbkQsU0FDRSxnQ0FBQyxTQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVGLFNBRGI7QUFFRSxJQUFBLFNBQVMsTUFGWDtBQUdFLElBQUEsS0FBSyxFQUFDLGFBSFI7QUFJRSxJQUFBLElBQUksRUFBQyxhQUpQO0FBS0UsSUFBQSxJQUFJLEVBQUMsYUFMUDtBQU1FLElBQUEsT0FBTyxFQUFDLFVBTlY7QUFPRSxJQUFBLFNBQVM7QUFQWCxLQVFNQyxjQVJOLEVBREY7QUFZRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2xhc3NOYW1lLCAuLi50ZXh0RmllbGRBdHRycyB9KSA9PiB7XG4gIGNvbnN0IHsgVGV4dEZpZWxkIH0gPSB1c2VVaUNvbnRleHQoKTtcbiAgcmV0dXJuIChcbiAgICA8VGV4dEZpZWxkXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGZ1bGxXaWR0aFxuICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICB0eXBlPVwiZGVzY3JpcHRpb25cIlxuICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBtdWx0aWxpbmVcbiAgICAgIHsuLi50ZXh0RmllbGRBdHRyc31cbiAgICAvPlxuICApO1xufTtcbiJdfQ==