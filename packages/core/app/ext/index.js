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

var _default = {
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
exports["default"] = _default;