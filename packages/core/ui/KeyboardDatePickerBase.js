"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardDatePickerBase = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var KeyboardDatePickerBase = function KeyboardDatePickerBase(_ref) {
  var value = _ref.value,
      changed = _ref.changed,
      name = _ref.name;

  var _useUiContext = (0, _UseContext["default"])(),
      MuiPickersUtilsProvider = _useUiContext.MuiPickersUtilsProvider,
      KeyboardDatePicker = _useUiContext.KeyboardDatePicker,
      DateFnsUtils = _useUiContext.DateFnsUtils;

  return _react["default"].createElement(MuiPickersUtilsProvider, {
    utils: DateFnsUtils
  }, _react["default"].createElement(KeyboardDatePicker, {
    name: name,
    disableToolbar: true,
    autoOk: true,
    variant: "inline",
    format: "dd / MM / yyyy",
    id: "date-picker-inline",
    label: "Date",
    value: value,
    onChange: changed,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  }));
};

exports.KeyboardDatePickerBase = KeyboardDatePickerBase;