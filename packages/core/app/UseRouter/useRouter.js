"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRouter = void 0;

var _react = _interopRequireDefault(require("react"));

var _useAppContext3 = require("../UseContext/useAppContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Hook
var useRouter = function useRouter() {
  var _useAppContext = (0, _useAppContext3.useAppContext)(),
      useParams = _useAppContext.useParams,
      useLocation = _useAppContext.useLocation,
      useHistory = _useAppContext.useHistory,
      useRouteMatch = _useAppContext.useRouteMatch;

  var params = useParams();
  var location = useLocation();
  var history = useHistory();
  var match = useRouteMatch();
  var push = history.push;

  var pushPath = function pushPath(path) {
    return push(path);
  };

  var pushedPath = function pushedPath(path) {
    return function () {
      return pushPath(path);
    };
  };

  var useRouteParam = function useRouteParam(paramName, matchUrl) {
    var _useAppContext2 = (0, _useAppContext3.useAppContext)(),
        useRouteMatch = _useAppContext2.useRouteMatch;

    var urlRouteMatch = useRouteMatch("".concat(matchUrl));
    var value = null;

    if (urlRouteMatch) {
      var _params = urlRouteMatch.params;
      value = _params[paramName];
    }

    return value;
  }; // Return our custom router object
  // Memoize so that a new object is only returned if something changes


  return _react["default"].useMemo(function () {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: _objectSpread({}, params),
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match: match,
      location: location,
      history: history,
      pushPath: pushPath,
      pushedPath: pushedPath,
      useRouteParam: useRouteParam
    };
  }, [params, match, location, history]);
};

exports.useRouter = useRouter;