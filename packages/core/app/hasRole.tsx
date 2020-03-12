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