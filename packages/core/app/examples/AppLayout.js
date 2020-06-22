"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

var _SideBarMenu = require("./SideBarMenu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useUiContext = (0, _UseContext["default"])(),
      AppBar = _useUiContext.AppBar,
      Toolbar = _useUiContext.Toolbar,
      IconButton = _useUiContext.IconButton,
      MenuIcon = _useUiContext.MenuIcon,
      Typography = _useUiContext.Typography,
      DrawerState = _useUiContext.DrawerState;

  var toggleDrawer = DrawerState.toggleDrawer;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(AppBar, {
    color: "default",
    position: "fixed",
    elevation: 4
  }, /*#__PURE__*/_react["default"].createElement(Toolbar, null, /*#__PURE__*/_react["default"].createElement(IconButton, {
    color: "primary",
    "aria-label": "open drawer",
    edge: "start",
    onClick: toggleDrawer(true)
  }, /*#__PURE__*/_react["default"].createElement(MenuIcon, null)), /*#__PURE__*/_react["default"].createElement(Typography, {
    variant: "h4",
    noWrap: true,
    color: "secondary"
  }, "WECATOSKEYAKAN"))), /*#__PURE__*/_react["default"].createElement(Toolbar, null), /*#__PURE__*/_react["default"].createElement(_SideBarMenu.SideBarMenu, null));
};

exports["default"] = _default;