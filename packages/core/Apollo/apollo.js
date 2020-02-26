"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloClient = _interopRequireDefault(require("apollo-client"));

var _apolloBoost = require("apollo-boost");

var _apolloUploadClient = require("apollo-upload-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csrfToken = function csrfToken() {
  var meta = document.querySelector('meta[name=csrf-token]');
  if (meta) return meta.getAttribute('content');
  return null;
};

var _default = new _apolloClient["default"]({
  link: (0, _apolloUploadClient.createUploadLink)({
    uri: '/graphql',
    fetchOptions: {
      credentials: 'same-origin'
    },
    headers: {
      'X-CSRF-Token': csrfToken()
    }
  }),
  cache: new _apolloBoost.InMemoryCache()
});

exports["default"] = _default;