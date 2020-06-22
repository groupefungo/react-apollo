"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ScrollableTabItem(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      Tab = _useUiContext.Tab;

  function tabProps(tabIndex) {
    return {
      id: "scrollable-force-tab-".concat(tabIndex),
      'aria-controls': "scrollable-force-tabpanel-".concat(tabIndex)
    };
  }

  var index = props.index;
  return /*#__PURE__*/_react["default"].createElement(Tab, _extends({}, props, tabProps(index)));
}

var _default = ScrollableTabItem;
exports["default"] = _default;