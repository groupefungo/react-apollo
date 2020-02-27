"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$e = _ref.e,
      e = _ref$e === void 0 ? '' : _ref$e,
      n = _ref.n,
      v = _ref.v,
      c = _ref.c,
      d = _ref.d,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? false : _ref$r,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useUiContext = (0, _UseContext["default"])(),
      Select = _useUiContext.Select,
      MenuItem = _useUiContext.MenuItem;

  return _react["default"].createElement(Select, {
    name: n,
    labelId: "".concat(n, "Label"),
    id: "".concat(n, "Select"),
    value: v,
    onChange: c,
    required: r,
    disabled: disabled
  }, _react["default"].createElement(MenuItem, {
    key: "default-".concat(n),
    value: e
  }, _react["default"].createElement("em", null, "Aucun")), d.map(function (t) {
    return _react["default"].createElement(MenuItem, {
      key: "".concat(n, "-").concat(t.id),
      value: t.id
    }, t.label);
  }));
};

exports["default"] = _default;