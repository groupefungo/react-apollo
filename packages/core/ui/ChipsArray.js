"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var chipsData = _ref.chipsData,
      size = _ref.size,
      chipDeleted = _ref.chipDeleted,
      chipClicked = _ref.chipClicked;

  var _useUiContext = (0, _UseContext["default"])(),
      Chip = _useUiContext.Chip,
      GetAppIcon = _useUiContext.GetAppIcon,
      Grid = _useUiContext.Grid;

  return _react["default"].createElement(Grid, {
    container: true,
    spacing: 1
  }, chipsData.map(function (data) {
    return _react["default"].createElement(Grid, {
      item: true,
      key: data.key || data.id
    }, _react["default"].createElement(Chip, {
      icon: data.id && _react["default"].createElement(GetAppIcon, null),
      onClick: chipClicked(data),
      clickable: data.id && true,
      size: size,
      key: data.key || data.id,
      label: data.label || data.filename,
      onDelete: chipDeleted && chipDeleted(data)
    }));
  }));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9DaGlwc0FycmF5LnRzeCJdLCJuYW1lcyI6WyJjaGlwc0RhdGEiLCJzaXplIiwiY2hpcERlbGV0ZWQiLCJjaGlwQ2xpY2tlZCIsIkNoaXAiLCJHZXRBcHBJY29uIiwiR3JpZCIsIm1hcCIsImRhdGEiLCJrZXkiLCJpZCIsImxhYmVsIiwiZmlsZW5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztlQUVlLHdCQUFtRDtBQUFBLE1BQWhEQSxTQUFnRCxRQUFoREEsU0FBZ0Q7QUFBQSxNQUFyQ0MsSUFBcUMsUUFBckNBLElBQXFDO0FBQUEsTUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsc0JBQzdCLDZCQUQ2QjtBQUFBLE1BQ3hEQyxJQUR3RCxpQkFDeERBLElBRHdEO0FBQUEsTUFDbERDLFVBRGtELGlCQUNsREEsVUFEa0Q7QUFBQSxNQUN0Q0MsSUFEc0MsaUJBQ3RDQSxJQURzQzs7QUFHaEUsU0FDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxTQUFTLE1BQWY7QUFBZ0IsSUFBQSxPQUFPLEVBQUU7QUFBekIsS0FDR04sU0FBUyxDQUFDTyxHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFdBQ2IsZ0NBQUMsSUFBRDtBQUFNLE1BQUEsSUFBSSxNQUFWO0FBQVcsTUFBQSxHQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBTCxJQUFZRCxJQUFJLENBQUNFO0FBQWpDLE9BQ0UsZ0NBQUMsSUFBRDtBQUNFLE1BQUEsSUFBSSxFQUFFRixJQUFJLENBQUNFLEVBQUwsSUFBVyxnQ0FBQyxVQUFELE9BRG5CO0FBRUUsTUFBQSxPQUFPLEVBQUVQLFdBQVcsQ0FBQ0ssSUFBRCxDQUZ0QjtBQUdFLE1BQUEsU0FBUyxFQUFFQSxJQUFJLENBQUNFLEVBQUwsSUFBVyxJQUh4QjtBQUlFLE1BQUEsSUFBSSxFQUFFVCxJQUpSO0FBS0UsTUFBQSxHQUFHLEVBQUVPLElBQUksQ0FBQ0MsR0FBTCxJQUFZRCxJQUFJLENBQUNFLEVBTHhCO0FBTUUsTUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FBTCxJQUFjSCxJQUFJLENBQUNJLFFBTjVCO0FBT0UsTUFBQSxRQUFRLEVBQUVWLFdBQVcsSUFBSUEsV0FBVyxDQUFDTSxJQUFEO0FBUHRDLE1BREYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQURGO0FBaUJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlVWlDb250ZXh0IGZyb20gJy4vVXNlQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaXBzRGF0YSwgc2l6ZSwgY2hpcERlbGV0ZWQsIGNoaXBDbGlja2VkIH0pID0+IHtcbiAgY29uc3QgeyBDaGlwLCBHZXRBcHBJY29uLCBHcmlkIH0gPSB1c2VVaUNvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgIHtjaGlwc0RhdGEubWFwKChkYXRhKSA9PiAoXG4gICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtkYXRhLmtleSB8fCBkYXRhLmlkfT5cbiAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgaWNvbj17ZGF0YS5pZCAmJiA8R2V0QXBwSWNvbiAvPn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoaXBDbGlja2VkKGRhdGEpfVxuICAgICAgICAgICAgY2xpY2thYmxlPXtkYXRhLmlkICYmIHRydWV9XG4gICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAga2V5PXtkYXRhLmtleSB8fCBkYXRhLmlkfVxuICAgICAgICAgICAgbGFiZWw9e2RhdGEubGFiZWwgfHwgZGF0YS5maWxlbmFtZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtjaGlwRGVsZXRlZCAmJiBjaGlwRGVsZXRlZChkYXRhKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXX0=