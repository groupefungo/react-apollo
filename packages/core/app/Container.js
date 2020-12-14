"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _ = _interopRequireDefault(require("."));

var _ui = _interopRequireDefault(require("../ui"));

var _ErrorBoundary = _interopRequireDefault(require("../ui/ErrorBoundary"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = function Container(_ref) {
  var useProvideAuth = _ref.useProvideAuth,
      thm = _ref.thm,
      children = _ref.children,
      withAuth = _ref.withAuth,
      customClient = _ref.customClient;
  return _react["default"].createElement(_ErrorBoundary["default"], null, _react["default"].createElement(_ui["default"], {
    thm: thm
  }, _react["default"].createElement(_["default"], {
    useProvideAuth: withAuth ? useProvideAuth : null,
    customClient: customClient
  }, children)));
};

Container.defaultProps = {
  withAuth: true,
  customClient: null
};
var _default = Container;
exports["default"] = _default;