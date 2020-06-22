"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.data,
      rowRender = _ref.rowRender;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data && data.map(function (d) {
    return rowRender(d);
  }));
};

exports["default"] = _default;