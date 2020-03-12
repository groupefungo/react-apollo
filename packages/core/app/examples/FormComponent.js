"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectEventType = function SelectEventType(_ref) {
  var _ref$emptyValue = _ref.emptyValue,
      emptyValue = _ref$emptyValue === void 0 ? 0 : _ref$emptyValue,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'kind' : _ref$name,
      value = _ref.value,
      changed = _ref.changed,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required;

  var _useUiContext = (0, _UseContext["default"])(),
      BaseSelect = _useUiContext.BaseSelect;

  var eventTypes = [{
    id: 'dueAccount',
    label: 'Reddition de compte'
  }, {
    id: 'general',
    label: 'General'
  }];
  if (!eventTypes) return null;
  return _react["default"].createElement(BaseSelect, {
    e: emptyValue,
    n: name,
    v: value,
    c: changed,
    d: eventTypes,
    r: required
  });
};

var _default = function _default(props) {
  var afterSave = props.afterSave;

  var _useState = (0, _react.useState)({
    id: null,
    title: 'test title',
    kind: 'dueAccount',
    eventDate: new Date(),
    description: 'test description'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      s = _useState2[0],
      setS = _useState2[1];

  var formInputChanged = function formInputChanged(_ref2) {
    var _ref2$target = _ref2.target,
        name = _ref2$target.name,
        value = _ref2$target.value;
    console.log('name', name, 'value', value);
    setS(_objectSpread({}, s, _defineProperty({}, name, value)));
  };

  var _useUiContext2 = (0, _UseContext["default"])(),
      Button = _useUiContext2.Button,
      FormControl = _useUiContext2.FormControl,
      InputLabel = _useUiContext2.InputLabel,
      Grid = _useUiContext2.Grid,
      FormHelperText = _useUiContext2.FormHelperText,
      Box = _useUiContext2.Box,
      KeyboardDatePickerBase = _useUiContext2.KeyboardDatePickerBase,
      DescriptionControl = _useUiContext2.DescriptionControl,
      TitleControl = _useUiContext2.TitleControl;

  var terrors = {};
  var id = s.id,
      title = s.title,
      kind = s.kind,
      eventDate = s.eventDate,
      description = s.description;
  return _react["default"].createElement(Box, {
    mx: "auto",
    width: {
      xs: 1,
      md: 2 / 3,
      lg: 1 / 2
    },
    alignSelf: "middle"
  }, _react["default"].createElement("form", {
    onSubmit: function onSubmit() {
      return console.log('saved');
    }
  }, _react["default"].createElement(Grid, {
    container: true,
    spacing: 3
  }, _react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 6
  }, _react["default"].createElement(TitleControl, {
    value: title,
    onChange: formInputChanged,
    helperText: (terrors.title || []).join(','),
    required: true
  })), _react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    justify: "space-between"
  }, _react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 3
  }, _react["default"].createElement(FormControl, {
    fullWidth: true
  }, _react["default"].createElement(InputLabel, {
    id: "event-kind-label"
  }, "Type"), _react["default"].createElement(SelectEventType, {
    value: kind,
    changed: formInputChanged,
    required: true
  }), _react["default"].createElement(FormHelperText, null, (terrors.kind || []).join(',')))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(KeyboardDatePickerBase, {
    name: "eventDate",
    value: eventDate,
    changed: function changed(v) {
      return setS(_objectSpread({}, s, {
        eventDate: v
      }));
    }
  }))), _react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12
  }, _react["default"].createElement(DescriptionControl, {
    value: description,
    onChange: formInputChanged,
    helperText: (terrors.description || []).join(',')
  })), _react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    justify: "flex-end"
  }, _react["default"].createElement(Button, {
    type: "submit",
    variant: "contained",
    color: "primary"
  }, id && 'Modifier', !id && 'Ajouter')))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXhhbXBsZXMvRm9ybUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiU2VsZWN0RXZlbnRUeXBlIiwiZW1wdHlWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImNoYW5nZWQiLCJyZXF1aXJlZCIsIkJhc2VTZWxlY3QiLCJldmVudFR5cGVzIiwiaWQiLCJsYWJlbCIsInByb3BzIiwiYWZ0ZXJTYXZlIiwidGl0bGUiLCJraW5kIiwiZXZlbnREYXRlIiwiRGF0ZSIsImRlc2NyaXB0aW9uIiwicyIsInNldFMiLCJmb3JtSW5wdXRDaGFuZ2VkIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIkdyaWQiLCJGb3JtSGVscGVyVGV4dCIsIkJveCIsIktleWJvYXJkRGF0ZVBpY2tlckJhc2UiLCJEZXNjcmlwdGlvbkNvbnRyb2wiLCJUaXRsZUNvbnRyb2wiLCJ0ZXJyb3JzIiwieHMiLCJtZCIsImxnIiwiam9pbiIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF1RTtBQUFBLDZCQUFyRUMsVUFBcUU7QUFBQSxNQUFyRUEsVUFBcUUsZ0NBQXhELENBQXdEO0FBQUEsdUJBQXJEQyxJQUFxRDtBQUFBLE1BQXJEQSxJQUFxRCwwQkFBOUMsTUFBOEM7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUFBLDJCQUF0QkMsUUFBc0I7QUFBQSxNQUF0QkEsUUFBc0IsOEJBQVgsS0FBVzs7QUFBQSxzQkFDdEUsNkJBRHNFO0FBQUEsTUFDckZDLFVBRHFGLGlCQUNyRkEsVUFEcUY7O0FBRzdGLE1BQU1DLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxJQUFBQSxFQUFFLEVBQUUsWUFETjtBQUVFQyxJQUFBQSxLQUFLLEVB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dUIsQ0FBRDtBQUFBLGFBQU9uQixJQUFJLG1CQUFLRCxDQUFMO0FBQVFILFFBQUFBLFNBQVMsRUFBRXVCO0FBQW5CLFNBQVg7QUFBQTtBQUhYLElBREYsQ0FiRixDQVRGLEVBK0JFLGdDQUFDLElBQUQ7QUFBTSxJQUFBLFNBQVMsTUFBZjtBQUFnQixJQUFBLElBQUksTUFBcEI7QUFBcUIsSUFBQSxFQUFFLEVBQUU7QUFBekIsS0FDRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFFckIsV0FEVDtBQUVFLElBQUEsUUFBUSxFQUFFRyxnQkFGWjtBQUdFLElBQUEsVUFBVSxFQUFFLENBQUNhLE9BQU8sQ0FBQ2hCLFdBQVIsSUFBdUIsRUFBeEIsRUFBNEJvQixJQUE1QixDQUFpQyxHQUFqQztBQUhkLElBREYsQ0EvQkYsRUF3Q0UsZ0NBQUMsSUFBRDtBQUFNLElBQUEsU0FBUyxNQUFmO0FBQWdCLElBQUEsSUFBSSxNQUFwQjtBQUFxQixJQUFBLEVBQUUsRUFBRSxFQUF6QjtBQUE2QixJQUFBLE9BQU8sRUFBQztBQUFyQyxLQUNFLGdDQUFDLE1BQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxPQUFPLEVBQUMsV0FGVjtBQUdFLElBQUEsS0FBSyxFQUFDO0FBSFIsS0FLRzVCLEVBQUUsSUFBSSxVQUxULEVBTUcsQ0FBQ0EsRUFBRCxJQUFPLFNBTlYsQ0FERixDQXhDRixDQURGLENBVkYsQ0FERjtBQWtFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi4vLi4vdWkvVXNlQ29udGV4dCc7XG5cbmNvbnN0IFNlbGVjdEV2ZW50VHlwZSA9ICh7ZW1wdHlWYWx1ZSA9IDAsIG5hbWUgPSAna2luZCcsIHZhbHVlLCBjaGFuZ2VkLCByZXF1aXJlZCA9IGZhbHNlfSkgPT4ge1xuICBjb25zdCB7IEJhc2VTZWxlY3QgfSA9IHVzZVVpQ29udGV4dCgpO1xuXG4gIGNvbnN0IGV2ZW50VHlwZXMgPSBbXG4gICAge1xuICAgICAgaWQ6ICdkdWVBY2NvdW50JyxcbiAgICAgIGxhYmVsOiAnUmVkZGl0aW9uIGRlIGNvbXB0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2dlbmVyYWwnLFxuICAgICAgbGFiZWw6ICdHZW5lcmFsJyxcbiAgICB9LFxuICBdO1xuXG4gIGlmICghZXZlbnRUeXBlcykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZVNlbGVjdCBlPXtlbXB0eVZhbHVlfSBuPXtuYW1lfSB2PXt2YWx1ZX0gYz17Y2hhbmdlZH0gZD17ZXZlbnRUeXBlc30gcj17cmVxdWlyZWR9Lz5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHthZnRlclNhdmV9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3MsIHNldFNdID0gdXNlU3RhdGUoe1xuICAgIGlkOiBudWxsLFxuICAgIHRpdGxlOiAndGVzdCB0aXRsZScsXG4gICAga2luZDogJ2R1ZUFjY291bnQnLFxuICAgIGV2ZW50RGF0ZTogbmV3IERhdGUoKSxcbiAgICBkZXNjcmlwdGlvbjogJ3Rlc3QgZGVzY3JpcHRpb24nLFxuICB9KVxuXG4gIGNvbnN0IGZvcm1JbnB1dENoYW5nZWQgPSAoe3RhcmdldDoge25hbWUsIHZhbHVlfX0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnbmFtZScsIG5hbWUsICd2YWx1ZScsIHZhbHVlKTtcbiAgICBzZXRTKHsuLi5zLCBbbmFtZV06IHZhbHVlfSlcbiAgfTtcblxuICBjb25zdCB7XG4gICAgQnV0dG9uLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgR3JpZCwgRm9ybUhlbHBlclRleHQsIEJveCxcbiAgICBLZXlib2FyZERhdGVQaWNrZXJCYXNlLCBEZXNjcmlwdGlvbkNvbnRyb2wsIFRpdGxlQ29udHJvbFxuICB9ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgY29uc3QgdGVycm9ycyA9IHt9O1xuXG4gIGNvbnN0IHtpZCwgdGl0bGUsIGtpbmQsIGV2ZW50RGF0ZSwgZGVzY3JpcHRpb259ID0gcztcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBteD1cImF1dG9cIlxuXG4gICAgICB3aWR0aD17e1xuICAgICAgICB4czogMSxcbiAgICAgICAgbWQ6IDIgLyAzLFxuICAgICAgICBsZzogMSAvIDIsXG4gICAgICB9fVxuICAgICAgYWxpZ25TZWxmPVwibWlkZGxlXCJcbiAgICA+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KCkgPT4gY29uc29sZS5sb2coJ3NhdmVkJyl9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPFRpdGxlQ29udHJvbFxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtSW5wdXRDaGFuZ2VkfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsodGVycm9ycy50aXRsZSB8fCBbXSkuam9pbignLCcpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZXZlbnQta2luZC1sYWJlbFwiPlR5cGU8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEV2ZW50VHlwZVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2tpbmR9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VkPXtmb3JtSW5wdXRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD57KHRlcnJvcnMua2luZCB8fCBbXSkuam9pbignLCcpfTwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJCYXNlXG4gICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50RGF0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2V2ZW50RGF0ZX1cbiAgICAgICAgICAgICAgICBjaGFuZ2VkPXsodikgPT4gc2V0Uyh7Li4ucywgZXZlbnREYXRlOiB2fSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbkNvbnRyb2xcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybUlucHV0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17KHRlcnJvcnMuZGVzY3JpcHRpb24gfHwgW10pLmpvaW4oJywnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuXG5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpZCAmJiAnTW9kaWZpZXInfVxuICAgICAgICAgICAgICB7IWlkICYmICdBam91dGVyJ31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PlxuICApO1xufTsiXX0=