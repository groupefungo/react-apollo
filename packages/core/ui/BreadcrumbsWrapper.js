"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Context = _interopRequireDefault(require("../app/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbsWrapper = function BreadcrumbsWrapper(_ref) {
  var data = _ref.data;
  var appContext = (0, _Context["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      Breadcrumbs = _useUiContext.Breadcrumbs,
      Typography = _useUiContext.Typography;

  var Link = appContext.Link;
  return _react["default"].createElement(Breadcrumbs, {
    "aria-label": "breadcrumb"
  }, data.map(function (breadcrumbData) {
    return breadcrumbData.path ? _react["default"].createElement(Link, {
      key: "breadcrumb-".concat(breadcrumbData.path),
      color: "inherit",
      to: breadcrumbData.path
    }, breadcrumbData.label) : _react["default"].createElement(Typography, {
      key: "breakcrumb-last",
      color: "textPrimary"
    }, breadcrumbData.label);
  }));
};

exports.BreadcrumbsWrapper = BreadcrumbsWrapper;