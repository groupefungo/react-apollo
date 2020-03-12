"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ext = _interopRequireDefault(require("../ext"));

var _Context = _interopRequireDefault(require("../Context"));

var _Apollo = _interopRequireDefault(require("../Apollo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  var appExt = (0, _ext["default"])();
  var ProvideAuth = appExt.ProvideAuth,
      Router = appExt.Router,
      ApolloProvider = appExt.ApolloProvider;
  return _react["default"].createElement(_Context["default"].Provider, {
    value: appExt
  }, _react["default"].createElement(ApolloProvider, {
    client: _Apollo["default"]
  }, _react["default"].createElement(ProvideAuth, null, _react["default"].createElement(Router, null, children))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvQXBwQ29udGV4dFByb3ZpZGVyL1Byb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJjaGlsZHJlbiIsImFwcEV4dCIsIlByb3ZpZGVBdXRoIiwiUm91dGVyIiwiQXBvbGxvUHJvdmlkZXIiLCJBUE9MTE9fQ0xJRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSx3QkFBZ0I7QUFBQSxNQUFkQSxRQUFjLFFBQWRBLFFBQWM7QUFDN0IsTUFBTUMsTUFBTSxHQUFHLHNCQUFmO0FBRDZCLE1BRXRCQyxXQUZzQixHQUVpQkQsTUFGakIsQ0FFdEJDLFdBRnNCO0FBQUEsTUFFVEMsTUFGUyxHQUVpQkYsTUFGakIsQ0FFVEUsTUFGUztBQUFBLE1BRURDLGNBRkMsR0FFaUJILE1BRmpCLENBRURHLGNBRkM7QUFJN0IsU0FDRSxnQ0FBQyxtQkFBRCxDQUFZLFFBQVo7QUFBcUIsSUFBQSxLQUFLLEVBQUVIO0FBQTVCLEtBQ0UsZ0NBQUMsY0FBRDtBQUFnQixJQUFBLE1BQU0sRUFBRUk7QUFBeEIsS0FDRSxnQ0FBQyxXQUFELFFBQ0UsZ0NBQUMsTUFBRCxRQUNHTCxRQURILENBREYsQ0FERixDQURGLENBREY7QUFXRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdXNlRXh0IGZyb20gJy4uL2V4dCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9Db250ZXh0JztcbmltcG9ydCBBUE9MTE9fQ0xJRU5UIGZyb20gXCIuLi9BcG9sbG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtjaGlsZHJlbn0pID0+IHtcbiAgY29uc3QgYXBwRXh0ID0gdXNlRXh0KCk7XG4gIGNvbnN0IHtQcm92aWRlQXV0aCwgUm91dGVyLCBBcG9sbG9Qcm92aWRlcn0gPSBhcHBFeHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXBwRXh0fT5cbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e0FQT0xMT19DTElFTlR9PlxuICAgICAgICA8UHJvdmlkZUF1dGg+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlQXV0aD5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59O1xuIl19