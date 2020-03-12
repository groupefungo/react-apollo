"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProvideAuth = ProvideAuth;
exports.useAuth = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseUserGql = _interopRequireDefault(require("../UseUserGql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var authContext = (0, _react.createContext)(null); // Hook for child components to get the auth object ...
// ... and re-render when it changes.

var useAuth = function useAuth() {
  return (0, _react.useContext)(authContext);
}; // Provider hook that creates auth object and handles state


exports.useAuth = useAuth;

var useProvideAuth = function useProvideAuth() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useUserGql$useMeQuer = (0, _UseUserGql["default"])().useMeQuery(),
      data = _useUserGql$useMeQuer.data,
      error = _useUserGql$useMeQuer.error;

  (0, _react.useEffect)(function () {
    if (data && data.me) {
      setUser(data.me);
    }
  }, [data]);
  if (error) throw error;

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
}; // Provider component that wraps your Container and makes auth object ...
// ... available to any child component that calls useAuth().


function ProvideAuth(_ref) {
  var children = _ref.children;
  var auth = useProvideAuth();
  return _react["default"].createElement(authContext.Provider, {
    value: auth
  }, children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvVXNlQXV0aC91c2VBdXRoLnRzeCJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsInVzZUF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZXIiLCJzZXRVc2VyIiwidXNlTWVRdWVyeSIsImRhdGEiLCJlcnJvciIsIm1lIiwic2lnbm91dCIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2tlbiIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJQcm92aWRlQXV0aCIsImNoaWxkcmVuIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLDBCQUFjLElBQWQsQ0FBcEIsQyxDQUVBO0FBQ0E7O0FBQ08sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLHVCQUFXRCxXQUFYLENBQU47QUFBQSxDQUFoQixDLENBRVA7Ozs7O0FBQ0EsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUEsa0JBQ0gscUJBQVMsSUFBVCxDQURHO0FBQUE7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUFBLDhCQUdMLDhCQUFhQyxVQUFiLEVBSEs7QUFBQSxNQUdwQkMsSUFIb0IseUJBR3BCQSxJQUhvQjtBQUFBLE1BR2RDLEtBSGMseUJBR2RBLEtBSGM7O0FBSzNCLHdCQUFVLFlBQU07QUFDZCxRQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsRUFBakIsRUFBcUI7QUFDbkJKLE1BQUFBLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDRSxFQUFOLENBQVA7QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDRixJQUFELENBSkg7QUFNQSxNQUFJQyxLQUFKLEVBQVcsTUFBTUEsS0FBTjs7QUFFWCxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFiO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBZDtBQUNBLFdBQU9DLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUFDQyxNQUFBQSxNQUFNLEVBQUUsUUFBVDtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFO0FBQUMsd0JBQWdCSjtBQUFqQjtBQUE1QixLQUFwQixDQUFMLENBQ0pLLElBREksQ0FDQyxZQUFNO0FBQ1ZkLE1BQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDQWUsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBTEksQ0FBUDtBQU1ELEdBVEQsQ0FiMkIsQ0F3QjNCOzs7QUFDQSxTQUFPO0FBQ0xsQixJQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTE0sSUFBQUEsT0FBTyxFQUFQQTtBQUZLLEdBQVA7QUFJRCxDQTdCRCxDLENBK0JBO0FBQ0E7OztBQUNPLFNBQVNhLFdBQVQsT0FBaUM7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDdEMsTUFBTUMsSUFBSSxHQUFHdEIsY0FBYyxFQUEzQjtBQUNBLFNBQU8sZ0NBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsSUFBQSxLQUFLLEVBQUVzQjtBQUE3QixLQUFvQ0QsUUFBcEMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVzZXJHcWwgZnJvbSAnLi4vVXNlVXNlckdxbCc7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcblxuLy8gUHJvdmlkZXIgaG9vayB0aGF0IGNyZWF0ZXMgYXV0aCBvYmplY3QgYW5kIGhhbmRsZXMgc3RhdGVcbmNvbnN0IHVzZVByb3ZpZGVBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlVXNlckdxbCgpLnVzZU1lUXVlcnkoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIGRhdGEubWUpIHtcbiAgICAgIHNldFVzZXIoZGF0YS5tZSk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG5cbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0nY3NyZi10b2tlbiddXCIpO1xuICAgIGNvbnN0IHRva2VuID0gbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICByZXR1cm4gZmV0Y2goJy91c2Vycy9zaWduX291dCcsIHttZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiB7J1gtQ1NSRi1Ub2tlbic6IHRva2VufX0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIHNpZ25vdXQsXG4gIH07XG59XG5cbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIHlvdXIgQ29udGFpbmVyIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLi5cbi8vIC4uLiBhdmFpbGFibGUgdG8gYW55IGNoaWxkIGNvbXBvbmVudCB0aGF0IGNhbGxzIHVzZUF1dGgoKS5cbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG4iXX0=