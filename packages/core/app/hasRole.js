"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(userRole) {
  var _useAppContext = (0, _UseContext["default"])(),
      useAuth = _useAppContext.useAuth;

  var auth = useAuth();
  var user = auth.user;
  var roles = user && user.roles || [];
  return roles.find(function (r) {
    return r.name === userRole;
  });
};

exports["default"] = _default;