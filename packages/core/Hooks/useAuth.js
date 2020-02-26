"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProvideAuth = ProvideAuth;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useUserGql = _interopRequireDefault(require("./useUserGql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var authContext = (0, _react.createContext)(null); // Hook for child components to get the auth object ...
// ... and re-render when it changes.

var _default = function _default() {
  return (0, _react.useContext)(authContext);
}; // Provider hook that creates auth object and handles state


exports["default"] = _default;

function useProvideAuth() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useUserGql$useMeQuer = (0, _useUserGql["default"])().useMeQuery(),
      data = _useUserGql$useMeQuer.data;

  (0, _react.useEffect)(function () {
    if (data && data.me) {
      setUser(data.me);
    }
  }, [data]);

  var signout = function signout() {
    var meta = document.querySelector("meta[name='csrf-token']");
    var token = meta.getAttribute('content');
    return fetch('/users/sign_out', {
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': token
      }
    }).then(function () {
      setUser(false);
      window.location.href = '/';
      return true;
    });
  }; // Return the user object and auth methods


  return {
    user: user,
    signout: signout
  };
} // Provider component that wraps your Container and makes auth object ...
// ... available to any child component that calls useAuth().


function ProvideAuth(_ref) {
  var children = _ref.children;
  var auth = useProvideAuth();
  return _react["default"].createElement(authContext.Provider, {
    value: auth
  }, children);
}