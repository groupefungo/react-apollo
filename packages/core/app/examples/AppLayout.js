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
      Menu = _useUiContext.Menu,
      Typography = _useUiContext.Typography,
      DrawerState = _useUiContext.DrawerState;

  var toggleDrawer = DrawerState.toggleDrawer;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(AppBar, {
    color: "default",
    position: "fixed",
    elevation: 4
  }, _react["default"].createElement(Toolbar, null, _react["default"].createElement(IconButton, {
    color: "primary",
    "aria-label": "open drawer",
    edge: "start",
    onClick: toggleDrawer(true)
  }, _react["default"].createElement(Menu, null)), _react["default"].createElement(Typography, {
    variant: "h4",
    noWrap: true,
    color: "secondary"
  }, "WECATOSKEYAKAN"))), _react["default"].createElement(Toolbar, null), _react["default"].createElement(_SideBarMenu.SideBarMenu, null));
};

exports["default"] = _default;