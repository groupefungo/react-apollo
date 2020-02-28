"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("./ext"));

var _CardGrid = _interopRequireDefault(require("../ui/CardGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RootComponent = function RootComponent() {
  var Link = _ext["default"].Link;
  return _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/rc"
  }, "To route component (/rc)"));
};

var RouteComponent = function RouteComponent() {
  return _react["default"].createElement("div", null, "in route component");
};

var _default = function _default() {
  var Route = _ext["default"].Route,
      Switch = _ext["default"].Switch;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CardGrid["default"], {
    data: [{
      id: 1,
      eventDate: '23423',
      kind: 'Patate',
      description: 'this is a description',
      title: 'title'
    }],
    addLabel: "un \xE9v\xE9nement",
    resourcesPath: "/events",
    dateHandler: function dateHandler(e) {
      return e.eventDate;
    },
    categoryHandler: function categoryHandler(e) {
      return e.kind;
    }
  }), "in body", _react["default"].createElement(Switch, null, _react["default"].createElement(Route, {
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