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
      value = _ref$value === void 0 ? '0' : _ref$value,
      label = _ref.label;

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
    selectedValue: value,
    label: label
  })))));
};

exports["default"] = _default;