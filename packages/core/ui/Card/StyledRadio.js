"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      Radio = _useUiContext.Radio,
      GroupWorkIcon = _useUiContext.GroupWorkIcon;

  return _react["default"].createElement(Radio, _extends({
    className: "filterItem",
    disableRipple: true,
    color: "default",
    checkedIcon: _react["default"].createElement(GroupWorkIcon, {
      color: "primary",
      fontSize: "inherit",
      className: "filterItem-checked"
    }),
    icon: _react["default"].createElement(GroupWorkIcon, {
      color: "disabled",
      fontSize: "inherit"
    })
  }, props));
};

exports["default"] = _default;