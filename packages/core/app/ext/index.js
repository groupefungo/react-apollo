"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _lodash = _interopRequireDefault(require("lodash"));

var _reactRouterDom = require("react-router-dom");

var _UseAuth = _interopRequireWildcard(require("../UseAuth"));

var _UseRouter = _interopRequireDefault(require("../UseRouter"));

var _UseQueryWrapper = _interopRequireDefault(require("../UseQueryWrapper"));

var _UseCompleteState = _interopRequireDefault(require("../UseCompleteState"));

var _UseBack = _interopRequireDefault(require("../UseBack"));

var _UseProcessing = _interopRequireDefault(require("../UseProcessing"));

var _UseTranslate = _interopRequireDefault(require("../UseTranslate"));

var _capitalize = _interopRequireDefault(require("../capitalize"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ext = {
  gql: _graphqlTag["default"],
  useQuery: _reactApollo.useQuery,
  useLazyQuery: _reactApollo.useLazyQuery,
  useMutation: _reactApollo.useMutation,
  Route: _reactRouterDom.Route,
  Switch: _reactRouterDom.Switch,
  Redirect: _reactRouterDom.Redirect,
  Link: _reactRouterDom.Link,
  useAuth: _UseAuth["default"],
  Router: _reactRouterDom.BrowserRouter,
  ProvideAuth: _UseAuth.ProvideAuth,
  useRouter: _UseRouter["default"],
  useQueryWrapper: _UseQueryWrapper["default"],
  ApolloProvider: _reactApollo.ApolloProvider,
  useCompleteState: _UseCompleteState["default"],
  useParams: _reactRouterDom.useParams,
  useLocation: _reactRouterDom.useLocation,
  useHistory: _reactRouterDom.useHistory,
  useRouteMatch: _reactRouterDom.useRouteMatch,
  useTranslate: _UseTranslate["default"],
  capitalize: _capitalize["default"],
  Lodash: _lodash["default"]
};

var _default = function _default() {
  return _objectSpread({}, ext, {
    UseBack: (0, _UseBack["default"])(),
    UseProcessing: (0, _UseProcessing["default"])()
  });
};

exports["default"] = _default;