"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SelectMui(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      FormControl = _useUiContext.FormControl,
      Select = _useUiContext.Select,
      InputLabel = _useUiContext.InputLabel,
      MenuItem = _useUiContext.MenuItem;

  var inputLabel = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var label = props.label,
      options = props.options,
      error = props.error,
      hasDefaultOption = props.hasDefaultOption,
      defaultOptionLabel = props.defaultOptionLabel,
      fullWidth = props.fullWidth,
      color = props.color,
      name = props.name,
      remainingProps = _objectWithoutProperties(props, ["label", "options", "error", "hasDefaultOption", "defaultOptionLabel", "fullWidth", "color", "name"]);

  (0, _react.useEffect)(function () {
    setLabelWidth(inputLabel.current.clientWidth);
  }, []);
  var labelId = "label_".concat(name);
  var elementId = "select_".concat(name);
  return /*#__PURE__*/_react["default"].createElement(FormControl, {
    color: color,
    variant: "outlined",
    error: error,
    fullWidth: fullWidth
  }, /*#__PURE__*/_react["default"].createElement(InputLabel, {
    ref: inputLabel,
    id: labelId
  }, label), /*#__PURE__*/_react["default"].createElement(Select, _extends({
    labelId: labelId,
    id: elementId,
    labelWidth: labelWidth,
    name: name
  }, remainingProps), hasDefaultOption ? /*#__PURE__*/_react["default"].createElement(MenuItem, {
    value: "-1"
  }, /*#__PURE__*/_react["default"].createElement("em", null, defaultOptionLabel)) : null, options.map(function (option) {
    var optionValue;
    var optionLabel;

    if (_typeof(option) === 'object') {
      optionValue = option.value;
      optionLabel = option.label;
    } else {
      optionValue = option;
      optionLabel = option;
    }

    return /*#__PURE__*/_react["default"].createElement(MenuItem, {
      id: "menu_item_".concat(optionValue),
      key: optionValue,
      value: optionValue
    }, optionLabel);
  })));
}

SelectMui.defaultProps = {
  error: false,
  hasDefaultOption: false,
  defaultOptionLabel: '',
  fullWidth: true,
  color: 'primary'
};
SelectMui.propTypes = {
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  hasDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.bool
};
var _default = SelectMui;
exports["default"] = _default;