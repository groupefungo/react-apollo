"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _ChipsArray = _interopRequireDefault(require("./ChipsArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var chipsData = _ref.chipsData,
      chipClicked = _ref.chipClicked,
      chipDeleted = _ref.chipDeleted;

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Typography = _useUiContext.Typography,
      Paper = _useUiContext.Paper,
      Box = _useUiContext.Box;

  return _react["default"].createElement(Grid, {
    container: true,
    spacing: 1
  }, _react["default"].createElement(Grid, {
    container: true,
    item: true,
    sm: 12
  }, _react["default"].createElement(Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Fichiers ajout\xE9s")), _react["default"].createElement(Grid, {
    container: true,
    item: true
  }, _react["default"].createElement(Box, {
    mb: 1
  }, _react["default"].createElement(Paper, {
    elevation: 0
  }, _react["default"].createElement(Box, {
    padding: 1
  }, _react["default"].createElement(_ChipsArray["default"], {
    chipClicked: chipClicked,
    chipsData: chipsData,
    chipDeleted: chipDeleted
  }))))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9GaWxlVXBsb2FkQXJlYS50c3giXSwibmFtZXMiOlsiY2hpcHNEYXRhIiwiY2hpcENsaWNrZWQiLCJjaGlwRGVsZXRlZCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFwZXIiLCJCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztlQUVlLHdCQUE2QztBQUFBLE1BQTFDQSxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxzQkFDakIsNkJBRGlCO0FBQUEsTUFDbERDLElBRGtELGlCQUNsREEsSUFEa0Q7QUFBQSxNQUM1Q0MsVUFENEMsaUJBQzVDQSxVQUQ0QztBQUFBLE1BQ2hDQyxLQURnQyxpQkFDaENBLEtBRGdDO0FBQUEsTUFDekJDLEdBRHlCLGlCQUN6QkEsR0FEeUI7O0FBRzFELFNBQ0UsZ0NBQUMsSUFBRDtBQUFNLElBQUEsU0FBUyxNQUFmO0FBQWdCLElBQUEsT0FBTyxFQUFFO0FBQXpCLEtBQ0UsZ0NBQUMsSUFBRDtBQUFNLElBQUEsU0FBUyxNQUFmO0FBQWdCLElBQUEsSUFBSSxNQUFwQjtBQUFxQixJQUFBLEVBQUUsRUFBRTtBQUF6QixLQUNFLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBQyxTQUFwQjtBQUE4QixJQUFBLEtBQUssRUFBQztBQUFwQywyQkFERixDQURGLEVBSUUsZ0NBQUMsSUFBRDtBQUFNLElBQUEsU0FBUyxNQUFmO0FBQWdCLElBQUEsSUFBSTtBQUFwQixLQUNFLGdDQUFDLEdBQUQ7QUFBSyxJQUFBLEVBQUUsRUFBRTtBQUFULEtBQ0UsZ0NBQUMsS0FBRDtBQUFPLElBQUEsU0FBUyxFQUFFO0FBQWxCLEtBQ0UsZ0NBQUMsR0FBRDtBQUFLLElBQUEsT0FBTyxFQUFFO0FBQWQsS0FDRSxnQ0FBQyxzQkFBRDtBQUNFLElBQUEsV0FBVyxFQUFFTCxXQURmO0FBRUUsSUFBQSxTQUFTLEVBQUVELFNBRmI7QUFHRSxJQUFBLFdBQVcsRUFBRUU7QUFIZixJQURGLENBREYsQ0FERixDQURGLENBSkYsQ0FERjtBQW9CRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi9Vc2VDb250ZXh0JztcblxuaW1wb3J0IENoaXBzQXJyYXkgZnJvbSAnLi9DaGlwc0FycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpcHNEYXRhLCBjaGlwQ2xpY2tlZCwgY2hpcERlbGV0ZWQgfSkgPT4ge1xuICBjb25zdCB7IEdyaWQsIFR5cG9ncmFwaHksIFBhcGVyLCBCb3ggfSA9IHVzZVVpQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc209ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5GaWNoaWVycyBham91dMOpczwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxuICAgICAgICA8Qm94IG1iPXsxfT5cbiAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgIDxCb3ggcGFkZGluZz17MX0+XG4gICAgICAgICAgICAgIDxDaGlwc0FycmF5XG4gICAgICAgICAgICAgICAgY2hpcENsaWNrZWQ9e2NoaXBDbGlja2VkfVxuICAgICAgICAgICAgICAgIGNoaXBzRGF0YT17Y2hpcHNEYXRhfVxuICAgICAgICAgICAgICAgIGNoaXBEZWxldGVkPXtjaGlwRGVsZXRlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG4iXX0=