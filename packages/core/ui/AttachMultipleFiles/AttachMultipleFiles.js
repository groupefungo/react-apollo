"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var id = _ref.id,
      className = _ref.className,
      changed = _ref.changed;

  var _useUiContext = (0, _UseContext["default"])(),
      AttachFile = _useUiContext.AttachFile,
      Button = _useUiContext.Button;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    className: className,
    id: id,
    multiple: true,
    onChange: changed
  }), _react["default"].createElement("label", {
    htmlFor: id
  }, _react["default"].createElement(Button, {
    variant: "contained",
    size: "small",
    disableElevation: true,
    color: "primary",
    component: "span",
    "aria-label": "upload a file",
    startIcon: _react["default"].createElement(AttachFile, null)
  }, "Joindre un fichier")));
};

exports["default"] = _default;