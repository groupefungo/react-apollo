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

function ScrollableTabItem(_ref) {
  var clickHandler = _ref.clickHandler,
      index = _ref.index,
      label = _ref.label,
      tabIcon = _ref.tabIcon;

  var _useUiContext = (0, _UseContext["default"])(),
      Tab = _useUiContext.Tab;

  function tabProps(tabIndex) {
    return {
      id: "scrollable-force-tab-".concat(tabIndex),
      'aria-controls': "scrollable-force-tabpanel-".concat(tabIndex)
    };
  }

  return _react["default"].createElement(Tab, _extends({
    label: label,
    icon: tabIcon,
    onClick: clickHandler
  }, tabProps(index)));
}

ScrollableTabItem.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  tabIcon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
var _default = ScrollableTabItem;
exports["default"] = _default;