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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXhhbXBsZXMvQXBwTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJBcHBCYXIiLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIk1lbnUiLCJUeXBvZ3JhcGh5IiwiRHJhd2VyU3RhdGUiLCJ0b2dnbGVEcmF3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlLG9CQUFNO0FBQUEsc0JBQ2tELDZCQURsRDtBQUFBLE1BQ1pBLE1BRFksaUJBQ1pBLE1BRFk7QUFBQSxNQUNKQyxPQURJLGlCQUNKQSxPQURJO0FBQUEsTUFDS0MsVUFETCxpQkFDS0EsVUFETDtBQUFBLE1BQ2lCQyxJQURqQixpQkFDaUJBLElBRGpCO0FBQUEsTUFDdUJDLFVBRHZCLGlCQUN1QkEsVUFEdkI7QUFBQSxNQUNtQ0MsV0FEbkMsaUJBQ21DQSxXQURuQzs7QUFBQSxNQUdaQyxZQUhZLEdBR0lELFdBSEosQ0FHWkMsWUFIWTtBQUtuQixTQUNFLGtFQUNFLGdDQUFDLE1BQUQ7QUFBUSxJQUFBLEtBQUssRUFBQyxTQUFkO0FBQXdCLElBQUEsUUFBUSxFQUFDLE9BQWpDO0FBQXlDLElBQUEsU0FBUyxFQUFFO0FBQXBELEtBQ0UsZ0NBQUMsT0FBRCxRQUNFLGdDQUFDLFVBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxTQURSO0FBRUUsa0JBQVcsYUFGYjtBQUdFLElBQUEsSUFBSSxFQUFDLE9BSFA7QUFJRSxJQUFBLE9BQU8sRUFBRUEsWUFBWSxDQUFDLElBQUQ7QUFKdkIsS0FNRSxnQ0FBQyxJQUFELE9BTkYsQ0FERixFQVNFLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBQyxJQUFwQjtBQUF5QixJQUFBLE1BQU0sTUFBL0I7QUFBZ0MsSUFBQSxLQUFLLEVBQUM7QUFBdEMsc0JBVEYsQ0FERixDQURGLEVBZ0JFLGdDQUFDLE9BQUQsT0FoQkYsRUFrQkUsZ0NBQUMsd0JBQUQsT0FsQkYsQ0FERjtBQXNCRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi4vLi4vdWkvVXNlQ29udGV4dCc7XG5pbXBvcnQge1NpZGVCYXJNZW51fSBmcm9tICcuL1NpZGVCYXJNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB7QXBwQmFyLCBUb29sYmFyLCBJY29uQnV0dG9uLCBNZW51LCBUeXBvZ3JhcGh5LCBEcmF3ZXJTdGF0ZX0gPSB1c2VVaUNvbnRleHQoKTtcblxuICBjb25zdCB7dG9nZ2xlRHJhd2VyfSA9IERyYXdlclN0YXRlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBCYXIgY29sb3I9XCJkZWZhdWx0XCIgcG9zaXRpb249XCJmaXhlZFwiIGVsZXZhdGlvbj17NH0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBub1dyYXAgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIFdFQ0FUT1NLRVlBS0FOXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxUb29sYmFyLz5cblxuICAgICAgPFNpZGVCYXJNZW51IC8+XG4gICAgPC8+XG4gICk7XG59OyJdfQ==