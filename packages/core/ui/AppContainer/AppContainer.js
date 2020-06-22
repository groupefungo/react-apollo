"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      Container = _useUiContext.Container;

  return _react["default"].createElement("div", {
    className: "app-container-wrapper"
  }, _react["default"].createElement(Container, null, props.children));
};

exports["default"] = _default;