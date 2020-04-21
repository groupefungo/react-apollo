"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var value = _ref.value,
      changed = _ref.changed,
      name = _ref.name;

  var _useUiContext = (0, _UseContext["default"])(),
      KeyboardDatePicker = _useUiContext.KeyboardDatePicker;

  return _react["default"].createElement(KeyboardDatePicker, {
    name: name,
    disableToolbar: true,
    autoOk: true,
    variant: "inline",
    format: "dd/MM/yyyy",
    placeholder: "10/10/2018",
    id: "date-picker-inline",
    label: "Date",
    value: value,
    onChange: changed,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  });
};

exports["default"] = _default;