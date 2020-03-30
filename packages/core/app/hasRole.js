"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useAppContext2 = require("./UseContext/useAppContext");

var _default = function _default(userRole) {
  var _useAppContext = (0, _useAppContext2.useAppContext)(),
      useAuth = _useAppContext.useAuth;

  var auth = useAuth();
  var user = auth.user;
  var roles = user.roles;
  return roles.find(function (r) {
    return r.name === userRole;
  });
};

exports["default"] = _default;