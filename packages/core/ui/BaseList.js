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
  return _react["default"].createElement(_react["default"].Fragment, null, data && data.map(function (d) {
    return rowRender(d);
  }));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9CYXNlTGlzdC50c3giXSwibmFtZXMiOlsiZGF0YSIsInJvd1JlbmRlciIsIm1hcCIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlO0FBQUEsTUFBR0EsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsU0FBVCxRQUFTQSxTQUFUO0FBQUEsU0FDYixrRUFFSUQsSUFBSSxJQUNGQSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsV0FDUEYsU0FBUyxDQUFDRSxDQUFELENBREY7QUFBQSxHQUFULENBSE4sQ0FEYTtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRhLCByb3dSZW5kZXIgfSkgPT4gKFxuICA8PlxuICAgIHtcbiAgICAgIGRhdGEgJiYgKFxuICAgICAgICBkYXRhLm1hcCgoZCkgPT4gKFxuICAgICAgICAgIHJvd1JlbmRlcihkKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIH1cbiAgPC8+XG4pO1xuIl19