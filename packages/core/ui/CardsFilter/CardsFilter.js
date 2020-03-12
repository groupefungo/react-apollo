"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _FilterList = _interopRequireDefault(require("../FilterList/FilterList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var onClick = _ref.onClick,
      filters = _ref.filters,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '0' : _ref$value;

  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles;

  var useStyles = makeStyles(function (theme) {
    return {
      filterBox: {
        background: theme.palette.background,
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      },
      title: {
        marginBottom: 5
      },
      filters: {
        marginBottom: 4
      }
    };
  });
  var classes = useStyles();

  var _useUiContext2 = (0, _UseContext["default"])(),
      Grid = _useUiContext2.Grid,
      Paper = _useUiContext2.Paper,
      RadioGroup = _useUiContext2.RadioGroup;

  return _react["default"].createElement(Grid, {
    container: true,
    alignItems: "center"
  }, _react["default"].createElement(Paper, {
    className: classes.filterBox,
    elevation: 1
  }, _react["default"].createElement(Grid, {
    container: true,
    item: true,
    spacing: 1,
    className: classes.filters
  }, _react["default"].createElement(RadioGroup, {
    row: true,
    "aria-label": "filters",
    name: "filters",
    value: value
  }, _react["default"].createElement(_FilterList["default"], {
    filters: filters,
    onClick: onClick,
    selectedValue: value
  })))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9DYXJkc0ZpbHRlci9DYXJkc0ZpbHRlci50c3giXSwibmFtZXMiOlsib25DbGljayIsImZpbHRlcnMiLCJ2YWx1ZSIsIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImZpbHRlckJveCIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicGFkZGluZyIsInNwYWNpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRpdGxlIiwibWFyZ2luQm90dG9tIiwiY2xhc3NlcyIsIkdyaWQiLCJQYXBlciIsIlJhZGlvR3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztlQUVlLHdCQUF1QztBQUFBLE1BQXBDQSxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsd0JBQWxCQyxLQUFrQjtBQUFBLE1BQWxCQSxLQUFrQiwyQkFBVixHQUFVOztBQUFBLHNCQUM3Qiw2QkFENkI7QUFBQSxNQUM1Q0MsVUFENEMsaUJBQzVDQSxVQUQ0Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHRCxVQUFVLENBQUMsVUFBQ0UsS0FBRDtBQUFBLFdBQzNCO0FBQ0VDLE1BQUFBLFNBQVMsRUFBRTtBQUNUQyxRQUFBQSxVQUFVLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjRCxVQURqQjtBQUVURSxRQUFBQSxPQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FGQTtBQUdUQyxRQUFBQSxXQUFXLEVBQUVOLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FISjtBQUlURSxRQUFBQSxZQUFZLEVBQUVQLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFKTCxPQURiO0FBT0VHLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxZQUFZLEVBQUU7QUFEVCxPQVBUO0FBVUViLE1BQUFBLE9BQU8sRUFBRTtBQUNQYSxRQUFBQSxZQUFZLEVBQUU7QUFEUDtBQVZYLEtBRDJCO0FBQUEsR0FBRCxDQUE1QjtBQWdCQSxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7O0FBbkJvRCx1QkFxQmhCLDZCQXJCZ0I7QUFBQSxNQXFCNUNZLElBckI0QyxrQkFxQjVDQSxJQXJCNEM7QUFBQSxNQXFCdENDLEtBckJzQyxrQkFxQnRDQSxLQXJCc0M7QUFBQSxNQXFCL0JDLFVBckIrQixrQkFxQi9CQSxVQXJCK0I7O0FBc0JwRCxTQUNFLGdDQUFDLElBQUQ7QUFBTSxJQUFBLFNBQVMsTUFBZjtBQUFnQixJQUFBLFVBQVUsRUFBQztBQUEzQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDVCxTQUExQjtBQUFxQyxJQUFBLFNBQVMsRUFBRTtBQUFoRCxLQUNFLGdDQUFDLElBQUQ7QUFBTSxJQUFBLFNBQVMsTUFBZjtBQUFnQixJQUFBLElBQUksTUFBcEI7QUFBcUIsSUFBQSxPQUFPLEVBQUUsQ0FBOUI7QUFBaUMsSUFBQSxTQUFTLEVBQUVTLE9BQU8sQ0FBQ2Q7QUFBcEQsS0FDRSxnQ0FBQyxVQUFEO0FBQ0UsSUFBQSxHQUFHLE1BREw7QUFFRSxrQkFBVyxTQUZiO0FBR0UsSUFBQSxJQUFJLEVBQUMsU0FIUDtBQUlFLElBQUEsS0FBSyxFQUFFQztBQUpULEtBTUUsZ0NBQUMsc0JBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBRUQsT0FBckI7QUFBOEIsSUFBQSxPQUFPLEVBQUVELE9BQXZDO0FBQWdELElBQUEsYUFBYSxFQUFFRTtBQUEvRCxJQU5GLENBREYsQ0FERixDQURGLENBREY7QUFnQkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVWlDb250ZXh0IGZyb20gJy4uL1VzZUNvbnRleHQnO1xuXG5pbXBvcnQgRmlsdGVyTGlzdCBmcm9tICcuLi9GaWx0ZXJMaXN0L0ZpbHRlckxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkNsaWNrLCBmaWx0ZXJzLCB2YWx1ZSA9ICcwJyB9KSA9PiB7XG4gIGNvbnN0IHsgbWFrZVN0eWxlcyB9ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+IChcbiAgICB7XG4gICAgICBmaWx0ZXJCb3g6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogNSxcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICAgIH0sXG4gICAgfSkpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB7IEdyaWQsIFBhcGVyLCBSYWRpb0dyb3VwIH0gPSB1c2VVaUNvbnRleHQoKTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWx0ZXJCb3h9IGVsZXZhdGlvbj17MX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5maWx0ZXJzfT5cbiAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgcm93XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZmlsdGVyc1wiXG4gICAgICAgICAgICBuYW1lPVwiZmlsdGVyc1wiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZpbHRlckxpc3QgZmlsdGVycz17ZmlsdGVyc30gb25DbGljaz17b25DbGlja30gc2VsZWN0ZWRWYWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG4iXX0=