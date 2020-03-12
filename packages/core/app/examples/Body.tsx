"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _RootComponent = _interopRequireDefault(require("./RootComponent"));

var _RouteComponent = _interopRequireDefault(require("./RouteComponent"));

var _FormComponent = _interopRequireDefault(require("./FormComponent"));

var _AppLayout = _interopRequireDefault(require("./AppLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useAppContext = (0, _UseContext["default"])(),
      Route = _useAppContext.Route,
      Switch = _useAppContext.Switch;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_AppLayout["default"], null), _react["default"].createElement("div", null, "in body"), _react["default"].createElement(Switch, null, _react["default"].createElement(Route, {
    component: _RootComponent["default"],
    path: '/',
    exact: true
  }), _react["default"].createElement(Route, {
    component: _RouteComponent["default"],
    path: '/rc',
    exact: true
  }), _react["default"].createElement(Route, {
    component: _FormComponent["default"],
    path: '/form',
    exact: true
  })));
};

exports["default"] = _default;