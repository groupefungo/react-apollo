"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function InputMui(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      InputAdornment = _useUiContext.InputAdornment,
      TextField = _useUiContext.TextField;

  var getAdornmentElement = function getAdornmentElement(adornment) {
    return _react["default"].createElement(InputAdornment, {
      position: "start"
    }, adornment);
  };

  var label = props.label,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      adornment = props.adornment,
      remainingProps = _objectWithoutProperties(props, ["label", "value", "onChange", "type", "adornment"]);

  var inputLabelProps = {
    shrink: true
  };

  if (adornment) {
    inputLabelProps.startAdornment = getAdornmentElement(adornment);
  }

  var inputProps = {
    type: type,
    value: value
  };

  if (type === 'number') {
    inputProps.min = 1;
    inputProps.max = 10;
  }

  return _react["default"].createElement(TextField, _extends({
    variant: "outlined",
    label: label,
    onChange: onChange,
    InputLabelProps: inputLabelProps,
    inputProps: inputProps
  }, remainingProps, {
    fullWidth: true
  }));
}

InputMui.defaultProps = {
  label: '',
  adornment: '',
  type: 'text'
};
InputMui.propTypes = {
  adornment: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.string]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};
var _default = InputMui;
exports["default"] = _default;