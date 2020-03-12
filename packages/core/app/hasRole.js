"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UseUserGql = _interopRequireDefault(require("./UseUserGql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(userRole) {
  var _useUserGql$useMeQuer = (0, _UseUserGql["default"])().useMeQuery(),
      data = _useUserGql$useMeQuer.data;

  if (!data) return null;
  var me = data.me;
  var roles = me.roles;
  return roles.find(function (r) {
    return r.name === userRole;
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaGFzUm9sZS50c3giXSwibmFtZXMiOlsidXNlclJvbGUiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsIm1lIiwicm9sZXMiLCJmaW5kIiwiciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlLGtCQUFDQSxRQUFELEVBQWM7QUFBQSw4QkFDViw4QkFBYUMsVUFBYixFQURVO0FBQUEsTUFDbkJDLElBRG1CLHlCQUNuQkEsSUFEbUI7O0FBRTNCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUZnQixNQUduQkMsRUFIbUIsR0FHWkQsSUFIWSxDQUduQkMsRUFIbUI7QUFBQSxNQUluQkMsS0FKbUIsR0FJVEQsRUFKUyxDQUluQkMsS0FKbUI7QUFNM0IsU0FBT0EsS0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsSUFBRixLQUFXUCxRQUFsQjtBQUFBLEdBQVgsQ0FBUDtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVXNlckdxbCBmcm9tICcuL1VzZVVzZXJHcWwnO1xuXG5leHBvcnQgZGVmYXVsdCAodXNlclJvbGUpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VVc2VyR3FsKCkudXNlTWVRdWVyeSgpO1xuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICBjb25zdCB7IG1lIH0gPSBkYXRhO1xuICBjb25zdCB7IHJvbGVzIH0gPSBtZTtcblxuICByZXR1cm4gcm9sZXMuZmluZCgocikgPT4gci5uYW1lID09PSB1c2VyUm9sZSk7XG59O1xuIl19