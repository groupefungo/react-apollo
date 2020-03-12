"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactRouterDom = require("react-router-dom");

var _UseAuth = _interopRequireWildcard(require("../UseAuth"));

var _UseUserGql = _interopRequireDefault(require("../UseUserGql"));

var _UseRouter = _interopRequireDefault(require("../UseRouter"));

var _UseQueryWrapper = _interopRequireDefault(require("../UseQueryWrapper"));

var _UseCompleteState = _interopRequireDefault(require("../UseCompleteState"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ext = {
  gql: _graphqlTag["default"],
  useQuery: _reactApollo.useQuery,
  useMutation: _reactApollo.useMutation,
  Route: _reactRouterDom.Route,
  Switch: _reactRouterDom.Switch,
  Redirect: _reactRouterDom.Redirect,
  Link: _reactRouterDom.Link,
  useAuth: _UseAuth["default"],
  Router: _reactRouterDom.BrowserRouter,
  ProvideAuth: _UseAuth.ProvideAuth,
  useUserGql: _UseUserGql["default"],
  useRouter: _UseRouter["default"],
  useQueryWrapper: _UseQueryWrapper["default"],
  ApolloProvider: _reactApollo.ApolloProvider,
  useCompleteState: _UseCompleteState["default"],
  useParams: _reactRouterDom.useParams,
  useLocation: _reactRouterDom.useLocation,
  useHistory: _reactRouterDom.useHistory,
  useRouteMatch: _reactRouterDom.useRouteMatch
};

var _default = function _default() {
  return ext;
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXh0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJleHQiLCJncWwiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiUm91dGUiLCJTd2l0Y2giLCJSZWRpcmVjdCIsIkxpbmsiLCJ1c2VBdXRoIiwiUm91dGVyIiwiUHJvdmlkZUF1dGgiLCJ1c2VVc2VyR3FsIiwidXNlUm91dGVyIiwidXNlUXVlcnlXcmFwcGVyIiwiQXBvbGxvUHJvdmlkZXIiLCJ1c2VDb21wbGV0ZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlTG9jYXRpb24iLCJ1c2VIaXN0b3J5IiwidXNlUm91dGVNYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBQ1ZDLEVBQUFBLEdBQUcsRUFBSEEsc0JBRFU7QUFFVkMsRUFBQUEsUUFBUSxFQUFSQSxxQkFGVTtBQUdWQyxFQUFBQSxXQUFXLEVBQVhBLHdCQUhVO0FBSVZDLEVBQUFBLEtBQUssRUFBTEEscUJBSlU7QUFLVkMsRUFBQUEsTUFBTSxFQUFOQSxzQkFMVTtBQU1WQyxFQUFBQSxRQUFRLEVBQVJBLHdCQU5VO0FBT1ZDLEVBQUFBLElBQUksRUFBSkEsb0JBUFU7QUFRVkMsRUFBQUEsT0FBTyxFQUFQQSxtQkFSVTtBQVNWQyxFQUFBQSxNQUFNLEVBQU5BLDZCQVRVO0FBVVZDLEVBQUFBLFdBQVcsRUFBWEEsb0JBVlU7QUFXVkMsRUFBQUEsVUFBVSxFQUFWQSxzQkFYVTtBQVlWQyxFQUFBQSxTQUFTLEVBQVRBLHFCQVpVO0FBYVZDLEVBQUFBLGVBQWUsRUFBZkEsMkJBYlU7QUFjVkMsRUFBQUEsY0FBYyxFQUFkQSwyQkFkVTtBQWVWQyxFQUFBQSxnQkFBZ0IsRUFBaEJBLDRCQWZVO0FBZ0JWQyxFQUFBQSxTQUFTLEVBQVRBLHlCQWhCVTtBQWlCVkMsRUFBQUEsV0FBVyxFQUFYQSwyQkFqQlU7QUFrQlZDLEVBQUFBLFVBQVUsRUFBVkEsMEJBbEJVO0FBbUJWQyxFQUFBQSxhQUFhLEVBQWJBO0FBbkJVLENBQVo7O2VBc0JlO0FBQUEsU0FBTW5CLEdBQU47QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQge3VzZU11dGF0aW9uLCB1c2VRdWVyeSwgQXBvbGxvUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBSb3V0ZSwgU3dpdGNoLCBMaW5rLCBSZWRpcmVjdCwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZVBhcmFtcywgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnksIHVzZVJvdXRlTWF0Y2hcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB1c2VBdXRoLCB7IFByb3ZpZGVBdXRoIH0gZnJvbSAnLi4vVXNlQXV0aCc7XG5pbXBvcnQgdXNlVXNlckdxbCBmcm9tICcuLi9Vc2VVc2VyR3FsJztcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnLi4vVXNlUm91dGVyJztcbmltcG9ydCB1c2VRdWVyeVdyYXBwZXIgZnJvbSAnLi4vVXNlUXVlcnlXcmFwcGVyJztcbmltcG9ydCB1c2VDb21wbGV0ZVN0YXRlIGZyb20gJy4uL1VzZUNvbXBsZXRlU3RhdGUnO1xuXG5jb25zdCBleHQgPSB7XG4gIGdxbCxcbiAgdXNlUXVlcnksXG4gIHVzZU11dGF0aW9uLFxuICBSb3V0ZSxcbiAgU3dpdGNoLFxuICBSZWRpcmVjdCxcbiAgTGluayxcbiAgdXNlQXV0aCxcbiAgUm91dGVyLFxuICBQcm92aWRlQXV0aCxcbiAgdXNlVXNlckdxbCxcbiAgdXNlUm91dGVyLFxuICB1c2VRdWVyeVdyYXBwZXIsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICB1c2VDb21wbGV0ZVN0YXRlLFxuICB1c2VQYXJhbXMsXG4gIHVzZUxvY2F0aW9uLFxuICB1c2VIaXN0b3J5LFxuICB1c2VSb3V0ZU1hdGNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBleHQ7Il19