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

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9CcmVhZGNydW1ic1dyYXBwZXIudHN4Il0sIm5hbWVzIjpbImRhdGEiLCJhcHBDb250ZXh0IiwiQnJlYWRjcnVtYnMiLCJUeXBvZ3JhcGh5IiwiTGluayIsIm1hcCIsImJyZWFkY3J1bWJEYXRhIiwicGF0aCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSx3QkFBYztBQUFBLE1BQVhBLElBQVcsUUFBWEEsSUFBVztBQUMzQixNQUFNQyxVQUFVLEdBQUcsOEJBQW5COztBQUQyQixzQkFHUyw2QkFIVDtBQUFBLE1BR25CQyxXQUhtQixpQkFHbkJBLFdBSG1CO0FBQUEsTUFHTkMsVUFITSxpQkFHTkEsVUFITTs7QUFBQSxNQUluQkMsSUFKbUIsR0FJVkgsVUFKVSxDQUluQkcsSUFKbUI7QUFNM0IsU0FDRSxnQ0FBQyxXQUFEO0FBQWEsa0JBQVc7QUFBeEIsS0FFSUosSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsY0FBRDtBQUFBLFdBQ1BBLGNBQWMsQ0FBQ0MsSUFBZixHQUVJLGdDQUFDLElBQUQ7QUFDRSxNQUFBLEdBQUcsdUJBQWdCRCxjQUFjLENBQUNDLElBQS9CLENBREw7QUFFRSxNQUFBLEtBQUssRUFBQyxTQUZSO0FBR0UsTUFBQSxFQUFFLEVBQUVELGNBQWMsQ0FBQ0M7QUFIckIsT0FLR0QsY0FBYyxDQUFDRSxLQUxsQixDQUZKLEdBV0ksZ0NBQUMsVUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFDLGlCQUROO0FBRUUsTUFBQSxLQUFLLEVBQUM7QUFGUixPQUlHRixjQUFjLENBQUNFLEtBSmxCLENBWkc7QUFBQSxHQUFULENBRkosQ0FERjtBQTBCRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi9Vc2VDb250ZXh0JztcbmltcG9ydCB1c2VBcHBDb250ZXh0IGZyb20gJy4uL2FwcC9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KCk7XG5cbiAgY29uc3QgeyBCcmVhZGNydW1icywgVHlwb2dyYXBoeSB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIGNvbnN0IHsgTGluayB9ID0gYXBwQ29udGV4dDtcblxuICByZXR1cm4gKFxuICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAge1xuICAgICAgICBkYXRhLm1hcCgoYnJlYWRjcnVtYkRhdGEpID0+IChcbiAgICAgICAgICBicmVhZGNydW1iRGF0YS5wYXRoXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2BicmVhZGNydW1iLSR7YnJlYWRjcnVtYkRhdGEucGF0aH1gfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgdG89e2JyZWFkY3J1bWJEYXRhLnBhdGh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnJlYWRjcnVtYkRhdGEubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGtleT1cImJyZWFrY3J1bWItbGFzdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnJlYWRjcnVtYkRhdGEubGFiZWx9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIClcbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0JyZWFkY3J1bWJzPlxuICApO1xufTtcbiJdfQ==