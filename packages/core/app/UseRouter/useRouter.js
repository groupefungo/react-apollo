"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRouter = void 0;

var _react = _interopRequireDefault(require("react"));

var _useAppContext2 = require("../UseContext/useAppContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Hook
var useRouter = function useRouter() {
  var _useAppContext = (0, _useAppContext2.useAppContext)(),
      useParams = _useAppContext.useParams,
      useLocation = _useAppContext.useLocation,
      useHistory = _useAppContext.useHistory,
      useRouteMatch = _useAppContext.useRouteMatch;

  var params = useParams();
  var location = useLocation();
  var history = useHistory();
  var match = useRouteMatch(); // Return our custom router object
  // Memoize so that a new object is only returned if something changes

  return _react["default"].useMemo(function () {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
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
      history: history
    };
  }, [params, match, location, history]);
};

exports.useRouter = useRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvVXNlUm91dGVyL3VzZVJvdXRlci50c3giXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUGFyYW1zIiwidXNlTG9jYXRpb24iLCJ1c2VIaXN0b3J5IiwidXNlUm91dGVNYXRjaCIsInBhcmFtcyIsImxvY2F0aW9uIiwiaGlzdG9yeSIsIm1hdGNoIiwiUmVhY3QiLCJ1c2VNZW1vIiwicHVzaCIsInJlcGxhY2UiLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQSx1QkFDaUMsb0NBRGpDO0FBQUEsTUFDckJDLFNBRHFCLGtCQUNyQkEsU0FEcUI7QUFBQSxNQUNWQyxXQURVLGtCQUNWQSxXQURVO0FBQUEsTUFDR0MsVUFESCxrQkFDR0EsVUFESDtBQUFBLE1BQ2VDLGFBRGYsa0JBQ2VBLGFBRGY7O0FBRzdCLE1BQU1DLE1BQU0sR0FBR0osU0FBUyxFQUF4QjtBQUNBLE1BQU1LLFFBQVEsR0FBR0osV0FBVyxFQUE1QjtBQUNBLE1BQU1LLE9BQU8sR0FBR0osVUFBVSxFQUExQjtBQUNBLE1BQU1LLEtBQUssR0FBR0osYUFBYSxFQUEzQixDQU42QixDQVE3QjtBQUNBOztBQUNBLFNBQU9LLGtCQUFNQyxPQUFOLENBQWM7QUFBQSxXQUNuQjtBQUNFO0FBQ0FDLE1BQUFBLElBQUksRUFBRUosT0FBTyxDQUFDSSxJQUZoQjtBQUdFQyxNQUFBQSxPQUFPLEVBQUVMLE9BQU8sQ0FBQ0ssT0FIbkI7QUFJRUMsTUFBQUEsUUFBUSxFQUFFUCxRQUFRLENBQUNPLFFBSnJCO0FBS0U7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLEtBQUssb0JBQU9ULE1BQVAsQ0FSUDtBQVNFO0FBQ0E7QUFDQUcsTUFBQUEsS0FBSyxFQUFMQSxLQVhGO0FBWUVGLE1BQUFBLFFBQVEsRUFBUkEsUUFaRjtBQWFFQyxNQUFBQSxPQUFPLEVBQVBBO0FBYkYsS0FEbUI7QUFBQSxHQUFkLEVBZ0JKLENBQUNGLE1BQUQsRUFBU0csS0FBVCxFQUFnQkYsUUFBaEIsRUFBMEJDLE9BQTFCLENBaEJJLENBQVA7QUFpQkQsQ0EzQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VBcHBDb250ZXh0fSBmcm9tIFwiLi4vVXNlQ29udGV4dC91c2VBcHBDb250ZXh0XCI7XG5cbi8vIEhvb2tcbmV4cG9ydCBjb25zdCB1c2VSb3V0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlUGFyYW1zLCB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSwgdXNlUm91dGVNYXRjaCB9ID0gdXNlQXBwQ29udGV4dCgpO1xuICBcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoKCk7XG5cbiAgLy8gUmV0dXJuIG91ciBjdXN0b20gcm91dGVyIG9iamVjdFxuICAvLyBNZW1vaXplIHNvIHRoYXQgYSBuZXcgb2JqZWN0IGlzIG9ubHkgcmV0dXJuZWQgaWYgc29tZXRoaW5nIGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKFxuICAgIHtcbiAgICAgIC8vIEZvciBjb252ZW5pZW5jZSBhZGQgcHVzaCgpLCByZXBsYWNlKCksIHBhdGhuYW1lIGF0IHRvcCBsZXZlbFxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgICAgcmVwbGFjZTogaGlzdG9yeS5yZXBsYWNlLFxuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgLy8gTWVyZ2UgcGFyYW1zIGFuZCBwYXJzZWQgcXVlcnkgc3RyaW5nIGludG8gc2luZ2xlIFwicXVlcnlcIiBvYmplY3RcbiAgICAgIC8vIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCBpbnRlcmNoYW5nZWFibHkuXG4gICAgICAvLyBFeGFtcGxlOiAvOnRvcGljP3NvcnQ9cG9wdWxhciAtPiB7IHRvcGljOiBcInJlYWN0XCIsIHNvcnQ6IFwicG9wdWxhclwiIH1cbiAgICAgIHF1ZXJ5OiB7IC4uLnBhcmFtcyB9LFxuICAgICAgLy8gSW5jbHVkZSBtYXRjaCwgbG9jYXRpb24sIGhpc3Rvcnkgb2JqZWN0cyBzbyB3ZSBoYXZlXG4gICAgICAvLyBhY2Nlc3MgdG8gZXh0cmEgUmVhY3QgUm91dGVyIGZ1bmN0aW9uYWxpdHkgaWYgbmVlZGVkLlxuICAgICAgbWF0Y2gsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGhpc3RvcnksXG4gICAgfVxuICApLCBbcGFyYW1zLCBtYXRjaCwgbG9jYXRpb24sIGhpc3RvcnldKTtcbn1cbiJdfQ==