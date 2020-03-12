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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXhhbXBsZXMvQm9keS50c3giXSwibmFtZXMiOlsiUm91dGUiLCJTd2l0Y2giLCJSb290Q29tcG9uZW50IiwiUm91dGVDb21wb25lbnQiLCJGb3JtQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSxvQkFBTTtBQUFBLHVCQUNLLDZCQURMO0FBQUEsTUFDWkEsS0FEWSxrQkFDWkEsS0FEWTtBQUFBLE1BQ0xDLE1BREssa0JBQ0xBLE1BREs7O0FBR25CLFNBQ0Usa0VBQ0UsZ0NBQUMscUJBQUQsT0FERixFQUdFLHVEQUhGLEVBSUUsZ0NBQUMsTUFBRCxRQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLFNBQVMsRUFBRUMseUJBQWxCO0FBQWlDLElBQUEsSUFBSSxFQUFFLEdBQXZDO0FBQTRDLElBQUEsS0FBSztBQUFqRCxJQURGLEVBRUUsZ0NBQUMsS0FBRDtBQUFPLElBQUEsU0FBUyxFQUFFQywwQkFBbEI7QUFBa0MsSUFBQSxJQUFJLEVBQUUsS0FBeEM7QUFBK0MsSUFBQSxLQUFLO0FBQXBELElBRkYsRUFHRSxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxTQUFTLEVBQUVDLHlCQUFsQjtBQUFpQyxJQUFBLElBQUksRUFBRSxPQUF2QztBQUFnRCxJQUFBLEtBQUs7QUFBckQsSUFIRixDQUpGLENBREY7QUFZRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBcHBDb250ZXh0IGZyb20gXCIuLi9Vc2VDb250ZXh0XCI7XG5pbXBvcnQgUm9vdENvbXBvbmVudCBmcm9tIFwiLi9Sb290Q29tcG9uZW50XCI7XG5pbXBvcnQgUm91dGVDb21wb25lbnQgZnJvbSBcIi4vUm91dGVDb21wb25lbnRcIjtcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gXCIuL0Zvcm1Db21wb25lbnRcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4vQXBwTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qge1JvdXRlLCBTd2l0Y2h9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBMYXlvdXQvPlxuXG4gICAgICA8ZGl2PmluIGJvZHk8L2Rpdj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1Jvb3RDb21wb25lbnR9IHBhdGg9eycvJ30gZXhhY3QvPlxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtSb3V0ZUNvbXBvbmVudH0gcGF0aD17Jy9yYyd9IGV4YWN0Lz5cbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH0gcGF0aD17Jy9mb3JtJ30gZXhhY3QvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC8+XG4gIClcbn07Il19