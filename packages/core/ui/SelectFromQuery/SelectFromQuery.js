"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SelectFromQuery(_ref) {
  var useQueryGql = _ref.useQueryGql,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      value = _ref.value,
      defaultOptionLabel = _ref.defaultOptionLabel,
      objectName = _ref.objectName,
      objectLabel = _ref.objectLabel,
      objectValue = _ref.objectValue,
      remainingProps = _objectWithoutProperties(_ref, ["useQueryGql", "label", "name", "onChange", "value", "defaultOptionLabel", "objectName", "objectLabel", "objectValue"]);

  var _useUiContext = (0, _UseContext["default"])(),
      SelectMui = _useUiContext.SelectMui,
      Skeleton = _useUiContext.Skeleton;

  var _useQueryGql = useQueryGql(),
      data = _useQueryGql.data,
      loading = _useQueryGql.loading;

  if (loading) {
    return _react["default"].createElement(Skeleton, {
      width: 170,
      height: 72
    });
  }

  var objects = data[objectName];
  var options = objects.map(function (object) {
    return {
      value: object[objectValue],
      label: object[objectLabel]
    };
  });
  return _react["default"].createElement(SelectMui, _extends({
    label: label,
    name: name,
    options: options,
    onChange: onChange,
    value: value,
    defaultOptionLabel: defaultOptionLabel,
    hasDefaultOption: true
  }, remainingProps));
}

SelectFromQuery.defaultProps = {
  label: '',
  defaultOptionLabel: ''
};
SelectFromQuery.propTypes = {
  useQueryGql: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  objectLabel: PropTypes.string.isRequired,
  objectValue: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultOptionLabel: PropTypes.string
};
var _default = SelectFromQuery;
exports["default"] = _default;