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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  return /*#__PURE__*/_react["default"].createElement(BaseSelect, {
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
    setS(_objectSpread(_objectSpread({}, s), {}, _defineProperty({}, name, value)));
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
  return /*#__PURE__*/_react["default"].createElement(Box, {
    mx: "auto",
    width: {
      xs: 1,
      md: 2 / 3,
      lg: 1 / 2
    },
    alignSelf: "middle"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit() {
      return console.log('saved');
    }
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(TitleControl, {
    value: title,
    onChange: formInputChanged,
    helperText: (terrors.title || []).join(','),
    required: true
  })), /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 3
  }, /*#__PURE__*/_react["default"].createElement(FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(InputLabel, {
    id: "event-kind-label"
  }, "Type"), /*#__PURE__*/_react["default"].createElement(SelectEventType, {
    value: kind,
    changed: formInputChanged,
    required: true
  }), /*#__PURE__*/_react["default"].createElement(FormHelperText, null, (terrors.kind || []).join(',')))), /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(KeyboardDatePickerBase, {
    name: "eventDate",
    value: eventDate,
    changed: function changed(v) {
      return setS(_objectSpread(_objectSpread({}, s), {}, {
        eventDate: v
      }));
    }
  }))), /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(DescriptionControl, {
    value: description,
    onChange: formInputChanged,
    helperText: (terrors.description || []).join(',')
  })), /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    justify: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    type: "submit",
    variant: "contained",
    color: "primary"
  }, id && 'Modifier', !id && 'Ajouter')))));
};

exports["default"] = _default;