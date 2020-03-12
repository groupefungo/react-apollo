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

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9LZXlib2FyZERhdGVQaWNrZXJCYXNlLnRzeCJdLCJuYW1lcyI6WyJ2YWx1ZSIsImNoYW5nZWQiLCJuYW1lIiwiTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIiLCJLZXlib2FyZERhdGVQaWNrZXIiLCJEYXRlRm5zVXRpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlLHdCQUE4QjtBQUFBLE1BQTNCQSxLQUEyQixRQUEzQkEsS0FBMkI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHNCQUMyQiw2QkFEM0I7QUFBQSxNQUNuQ0MsdUJBRG1DLGlCQUNuQ0EsdUJBRG1DO0FBQUEsTUFDVkMsa0JBRFUsaUJBQ1ZBLGtCQURVO0FBQUEsTUFDVUMsWUFEVixpQkFDVUEsWUFEVjs7QUFFM0MsU0FDRSxnQ0FBQyx1QkFBRDtBQUF5QixJQUFBLEtBQUssRUFBRUE7QUFBaEMsS0FDRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFSCxJQURSO0FBRUUsSUFBQSxjQUFjLE1BRmhCO0FBR0UsSUFBQSxNQUFNLE1BSFI7QUFJRSxJQUFBLE9BQU8sRUFBQyxRQUpWO0FBS0UsSUFBQSxNQUFNLEVBQUMsZ0JBTFQ7QUFNRSxJQUFBLEVBQUUsRUFBQyxvQkFOTDtBQU9FLElBQUEsS0FBSyxFQUFDLE1BUFI7QUFRRSxJQUFBLEtBQUssRUFBRUYsS0FSVDtBQVNFLElBQUEsUUFBUSxFQUFFQyxPQVRaO0FBVUUsSUFBQSxtQkFBbUIsRUFBRTtBQUNuQixvQkFBYztBQURLO0FBVnZCLElBREYsQ0FERjtBQWtCRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdmFsdWUsIGNoYW5nZWQsIG5hbWUgfSkgPT4ge1xuICBjb25zdCB7IE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCBLZXlib2FyZERhdGVQaWNrZXIsIERhdGVGbnNVdGlscyB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxuICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBkaXNhYmxlVG9vbGJhclxuICAgICAgICBhdXRvT2tcbiAgICAgICAgdmFyaWFudD1cImlubGluZVwiXG4gICAgICAgIGZvcm1hdD1cImRkIC8gTU0gLyB5eXl5XCJcbiAgICAgICAgaWQ9XCJkYXRlLXBpY2tlci1pbmxpbmVcIlxuICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VkfVxuICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxuICApO1xufTtcbiJdfQ==