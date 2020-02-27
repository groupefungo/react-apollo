"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useAuth", {
  enumerable: true,
  get: function get() {
    return _useAuth["default"];
  }
});
Object.defineProperty(exports, "ProvideAuth", {
  enumerable: true,
  get: function get() {
    return _useAuth.ProvideAuth;
  }
});
Object.defineProperty(exports, "useRouter", {
  enumerable: true,
  get: function get() {
    return _useRouter["default"];
  }
});
Object.defineProperty(exports, "useUserGql", {
  enumerable: true,
  get: function get() {
    return _useUserGql["default"];
  }
});
Object.defineProperty(exports, "useQueryWrapper", {
  enumerable: true,
  get: function get() {
    return _useQueryWrapper["default"];
  }
});
Object.defineProperty(exports, "useCompleteState", {
  enumerable: true,
  get: function get() {
    return _useCompleteState["default"];
  }
});

var _useAuth = _interopRequireWildcard(require("./useAuth"));

var _useRouter = _interopRequireDefault(require("./useRouter"));

var _useUserGql = _interopRequireDefault(require("./useUserGql"));

var _useQueryWrapper = _interopRequireDefault(require("./useQueryWrapper"));

var _useCompleteState = _interopRequireDefault(require("./useCompleteState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }