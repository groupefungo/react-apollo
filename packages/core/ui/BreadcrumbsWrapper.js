"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.data;
  var appContext = (0, _UseContext2["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      Breadcrumbs = _useUiContext.Breadcrumbs,
      Typography = _useUiContext.Typography;

  var Link = appContext.Link;
  return /*#__PURE__*/_react["default"].createElement(Breadcrumbs, {
    "aria-label": "breadcrumb"
  }, data.map(function (breadcrumbData) {
    return breadcrumbData.path ? /*#__PURE__*/_react["default"].createElement(Link, {
      key: "breadcrumb-".concat(breadcrumbData.path),
      color: "inherit",
      to: breadcrumbData.path
    }, breadcrumbData.label) : /*#__PURE__*/_react["default"].createElement(Typography, {
      key: "breakcrumb-last",
      color: "textPrimary"
    }, breadcrumbData.label);
  }));
};

exports["default"] = _default;