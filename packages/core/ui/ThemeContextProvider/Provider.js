"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("../ext"));

var _muiTheme = _interopRequireDefault(require("../Theme/mui-theme"));

var _Context = _interopRequireDefault(require("../Context/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var t = _ref.t,
      children = _ref.children;
  var ext = (0, _ext["default"])();
  var ThemeProvider = ext.ThemeProvider,
      createMuiTheme = ext.createMuiTheme,
      Container = ext.Container,
      CssBaseline = ext.CssBaseline;
  var theme = createMuiTheme(t || _muiTheme["default"]);
  return _react["default"].createElement(_Context["default"].Provider, {
    value: ext
  }, _react["default"].createElement(ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(Container, null, _react["default"].createElement(CssBaseline, null), children)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9UaGVtZUNvbnRleHRQcm92aWRlci9Qcm92aWRlci50c3giXSwibmFtZXMiOlsidCIsImNoaWxkcmVuIiwiZXh0IiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZU11aVRoZW1lIiwiQ29udGFpbmVyIiwiQ3NzQmFzZWxpbmUiLCJ0aGVtZSIsIm11aVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSx3QkFBbUI7QUFBQSxNQUFqQkEsQ0FBaUIsUUFBakJBLENBQWlCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQ2hDLE1BQU1DLEdBQUcsR0FBRyxzQkFBWjtBQURnQyxNQUV6QkMsYUFGeUIsR0FFZ0NELEdBRmhDLENBRXpCQyxhQUZ5QjtBQUFBLE1BRVZDLGNBRlUsR0FFZ0NGLEdBRmhDLENBRVZFLGNBRlU7QUFBQSxNQUVNQyxTQUZOLEdBRWdDSCxHQUZoQyxDQUVNRyxTQUZOO0FBQUEsTUFFaUJDLFdBRmpCLEdBRWdDSixHQUZoQyxDQUVpQkksV0FGakI7QUFHaEMsTUFBTUMsS0FBSyxHQUFHSCxjQUFjLENBQUNKLENBQUMsSUFBSVEsb0JBQU4sQ0FBNUI7QUFFQSxTQUNFLGdDQUFDLG1CQUFELENBQVcsUUFBWDtBQUFvQixJQUFBLEtBQUssRUFBRU47QUFBM0IsS0FDRSxnQ0FBQyxhQUFEO0FBQWUsSUFBQSxLQUFLLEVBQUVLO0FBQXRCLEtBQ0UsZ0NBQUMsU0FBRCxRQUNFLGdDQUFDLFdBQUQsT0FERixFQUVHTixRQUZILENBREYsQ0FERixDQURGO0FBVUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZUV4dCBmcm9tICcuLi9leHQnXG5pbXBvcnQgbXVpVGhlbWUgZnJvbSAnLi4vVGhlbWUvbXVpLXRoZW1lJ1xuaW1wb3J0IFVpQ29udGV4dCBmcm9tICcuLi9Db250ZXh0L0NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0ICh7dCwgY2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IGV4dCA9IHVzZUV4dCgpO1xuICBjb25zdCB7VGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmV9ID0gZXh0O1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHQgfHwgbXVpVGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPFVpQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZXh0fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvVWlDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXX0=