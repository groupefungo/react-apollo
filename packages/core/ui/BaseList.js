"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseList = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseList = function BaseList(_ref) {
  var data = _ref.data,
      rowRender = _ref.rowRender;
  return _react["default"].createElement(_react["default"].Fragment, null, data && data.map(function (d) {
    return rowRender(d);
  }));
};

exports.BaseList = BaseList;