"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$createdAt = _ref.createdAt,
      createdAt = _ref$createdAt === void 0 ? '' : _ref$createdAt,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? '' : _ref$category;

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box;

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var date = new Date(createdAt);
  return _react["default"].createElement(Grid, {
    container: true,
    justify: "space-between",
    spacing: 2
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Box, {
    bgcolor: "secondary.main",
    py: 0.5,
    px: 1,
    borderRadius: 8,
    color: "background.paper"
  }, date.toLocaleDateString('fr', options))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Typography, {
    color: "textSecondary"
  }, category)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9DdXN0b21DYXJkSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJjcmVhdGVkQXQiLCJjYXRlZ29yeSIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiQm94Iiwib3B0aW9ucyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWUsd0JBQXVDO0FBQUEsNEJBQXBDQSxTQUFvQztBQUFBLE1BQXBDQSxTQUFvQywrQkFBeEIsRUFBd0I7QUFBQSwyQkFBcEJDLFFBQW9CO0FBQUEsTUFBcEJBLFFBQW9CLDhCQUFULEVBQVM7O0FBQUEsc0JBQ2xCLDZCQURrQjtBQUFBLE1BQzVDQyxJQUQ0QyxpQkFDNUNBLElBRDRDO0FBQUEsTUFDdENDLFVBRHNDLGlCQUN0Q0EsVUFEc0M7QUFBQSxNQUMxQkMsR0FEMEIsaUJBQzFCQSxHQUQwQjs7QUFFcEQsTUFBTUMsT0FBTyxHQUFHO0FBQUVDLElBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxJQUFBQSxJQUFJLEVBQUUsU0FBekI7QUFBb0NDLElBQUFBLEtBQUssRUFBRSxNQUEzQztBQUFtREMsSUFBQUEsR0FBRyxFQUFFO0FBQXhELEdBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU1gsU0FBVCxDQUFiO0FBQ0EsU0FDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxTQUFTLE1BQWY7QUFBZ0IsSUFBQSxPQUFPLEVBQUMsZUFBeEI7QUFBd0MsSUFBQSxPQUFPLEVBQUU7QUFBakQsS0FDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxJQUFJO0FBQVYsS0FDRSxnQ0FBQyxHQUFEO0FBQUssSUFBQSxPQUFPLEVBQUMsZ0JBQWI7QUFBOEIsSUFBQSxFQUFFLEVBQUUsR0FBbEM7QUFBdUMsSUFBQSxFQUFFLEVBQUUsQ0FBM0M7QUFBOEMsSUFBQSxZQUFZLEVBQUUsQ0FBNUQ7QUFBK0QsSUFBQSxLQUFLLEVBQUM7QUFBckUsS0FDR1UsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QixJQUF4QixFQUE4QlAsT0FBOUIsQ0FESCxDQURGLENBREYsRUFNRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxJQUFJO0FBQVYsS0FDRSxnQ0FBQyxVQUFEO0FBQVksSUFBQSxLQUFLLEVBQUM7QUFBbEIsS0FDR0osUUFESCxDQURGLENBTkYsQ0FERjtBQWNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuL1VzZUNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjcmVhdGVkQXQgPSAnJywgY2F0ZWdvcnkgPSAnJyB9KSA9PiB7XG4gIGNvbnN0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQm94IH0gPSB1c2VVaUNvbnRleHQoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH07XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjcmVhdGVkQXQpO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgPEJveCBiZ2NvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIiBweT17MC41fSBweD17MX0gYm9yZGVyUmFkaXVzPXs4fSBjb2xvcj1cImJhY2tncm91bmQucGFwZXJcIj5cbiAgICAgICAgICB7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyJywgb3B0aW9ucyl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufTtcbiJdfQ==