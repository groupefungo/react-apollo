"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactRouterDom = require("react-router-dom");

var _Hooks = require("../Hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  gql: _graphqlTag["default"],
  useQuery: _reactApollo.useQuery,
  useMutation: _reactApollo.useMutation,
  Route: _reactRouterDom.Route,
  Switch: _reactRouterDom.Switch,
  Redirect: _reactRouterDom.Redirect,
  Link: _reactRouterDom.Link,
  useAuth: _Hooks.useAuth,
  Router: _reactRouterDom.BrowserRouter,
  ProvideAuth: _Hooks.ProvideAuth,
  useUserGql: _Hooks.useUserGql,
  useRouter: _Hooks.useRouter,
  useQueryWrapper: _Hooks.useQueryWrapper,
  ApolloProvider: _reactApollo.ApolloProvider
};
exports["default"] = _default;