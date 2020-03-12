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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9CYXNlU2VsZWN0LnRzeCJdLCJuYW1lcyI6WyJlIiwibiIsInYiLCJjIiwiZCIsInIiLCJkaXNhYmxlZCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwibWFwIiwidCIsImlkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlLHdCQUF5RDtBQUFBLG9CQUF0REEsQ0FBc0Q7QUFBQSxNQUF0REEsQ0FBc0QsdUJBQWxELEVBQWtEO0FBQUEsTUFBOUNDLENBQThDLFFBQTlDQSxDQUE4QztBQUFBLE1BQTNDQyxDQUEyQyxRQUEzQ0EsQ0FBMkM7QUFBQSxNQUF4Q0MsQ0FBd0MsUUFBeENBLENBQXdDO0FBQUEsTUFBckNDLENBQXFDLFFBQXJDQSxDQUFxQztBQUFBLG9CQUFsQ0MsQ0FBa0M7QUFBQSxNQUFsQ0EsQ0FBa0MsdUJBQTlCLEtBQThCO0FBQUEsMkJBQXZCQyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1Qiw4QkFBWixLQUFZOztBQUFBLHNCQUN6Qyw2QkFEeUM7QUFBQSxNQUM5REMsTUFEOEQsaUJBQzlEQSxNQUQ4RDtBQUFBLE1BQ3REQyxRQURzRCxpQkFDdERBLFFBRHNEOztBQUV0RSxTQUNFLGdDQUFDLE1BQUQ7QUFDRSxJQUFBLElBQUksRUFBRVAsQ0FEUjtBQUVFLElBQUEsT0FBTyxZQUFLQSxDQUFMLFVBRlQ7QUFHRSxJQUFBLEVBQUUsWUFBS0EsQ0FBTCxXQUhKO0FBSUUsSUFBQSxLQUFLLEVBQUVDLENBSlQ7QUFLRSxJQUFBLFFBQVEsRUFBRUMsQ0FMWjtBQU1FLElBQUEsUUFBUSxFQUFFRSxDQU5aO0FBT0UsSUFBQSxRQUFRLEVBQUVDO0FBUFosS0FTRSxnQ0FBQyxRQUFEO0FBQVUsSUFBQSxHQUFHLG9CQUFhTCxDQUFiLENBQWI7QUFBK0IsSUFBQSxLQUFLLEVBQUVEO0FBQXRDLEtBQ0Usb0RBREYsQ0FURixFQWFJSSxDQUFDLENBQUNLLEdBQUYsQ0FBTSxVQUFDQyxDQUFEO0FBQUEsV0FDSixnQ0FBQyxRQUFEO0FBQVUsTUFBQSxHQUFHLFlBQUtULENBQUwsY0FBVVMsQ0FBQyxDQUFDQyxFQUFaLENBQWI7QUFBK0IsTUFBQSxLQUFLLEVBQUVELENBQUMsQ0FBQ0M7QUFBeEMsT0FBNkNELENBQUMsQ0FBQ0UsS0FBL0MsQ0FESTtBQUFBLEdBQU4sQ0FiSixDQURGO0FBb0JELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuL1VzZUNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBlID0gJycsIG4sIHYsIGMsIGQsIHIgPSBmYWxzZSwgZGlzYWJsZWQgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHsgU2VsZWN0LCBNZW51SXRlbSB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgbmFtZT17bn1cbiAgICAgIGxhYmVsSWQ9e2Ake259TGFiZWxgfVxuICAgICAgaWQ9e2Ake259U2VsZWN0YH1cbiAgICAgIHZhbHVlPXt2fVxuICAgICAgb25DaGFuZ2U9e2N9XG4gICAgICByZXF1aXJlZD17cn1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICA8TWVudUl0ZW0ga2V5PXtgZGVmYXVsdC0ke259YH0gdmFsdWU9e2V9PlxuICAgICAgICA8ZW0+QXVjdW48L2VtPlxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIHtcbiAgICAgICAgZC5tYXAoKHQpID0+IChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtgJHtufS0ke3QuaWR9YH0gdmFsdWU9e3QuaWR9Pnt0LmxhYmVsfTwvTWVudUl0ZW0+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9TZWxlY3Q+XG4gICk7XG59O1xuIl19