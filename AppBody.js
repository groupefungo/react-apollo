"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = require("@groupefungo/js-modules-core/Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RootComponent = function RootComponent() {
  var Link = _Context.appUses.Link;
  return _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/rc"
  }, "To route component (/rc)"));
};

var RouteComponent = function RouteComponent() {
  return _react["default"].createElement("div", null, "in route component");
};

var _default = function _default() {
  var Route = _Context.appUses.Route,
      Switch = _Context.appUses.Switch;
  return _react["default"].createElement(_react["default"].Fragment, null, "in body", _react["default"].createElement(Switch, null, _react["default"].createElement(Route, {
    component: RootComponent,
    path: '/',
    exact: true
  }), _react["default"].createElement(Route, {
    component: RouteComponent,
    path: '/rc',
    exact: true
  })));
};

exports["default"] = _default;