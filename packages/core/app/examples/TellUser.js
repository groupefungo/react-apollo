"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useUiContext = (0, _UseContext["default"])(),
      SnackBar = _useUiContext.SnackBar;

  var informSuccess = SnackBar.informSuccess,
      informError = SnackBar.informError;

  var onSuccess = function onSuccess() {
    return informSuccess('Hello world!');
  };

  var onError = function onError() {
    return informError('To hell, world!');
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    onClick: onSuccess
  }, "Click me to alert success"), _react["default"].createElement("button", {
    onClick: onError
  }, "Click me to alert error"));
};

exports["default"] = _default;