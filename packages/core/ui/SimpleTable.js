"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var rows = _ref.rows;

  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles;

  var useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  var classes = useStyles();

  var _useUiContext2 = (0, _UseContext["default"])(),
      TableContainer = _useUiContext2.TableContainer,
      Table = _useUiContext2.Table,
      TableHead = _useUiContext2.TableHead,
      TableRow = _useUiContext2.TableRow,
      TableCell = _useUiContext2.TableCell,
      TableBody = _useUiContext2.TableBody,
      Paper = _useUiContext2.Paper;

  return _react["default"].createElement(TableContainer, {
    component: Paper
  }, _react["default"].createElement(Table, {
    className: classes.table,
    "aria-label": "simple table"
  }, _react["default"].createElement(TableHead, null, _react["default"].createElement(TableRow, null, _react["default"].createElement(TableCell, null, "intervention"), _react["default"].createElement(TableCell, {
    align: "right"
  }, "no de dossier"), _react["default"].createElement(TableCell, {
    align: "right"
  }, "initi\xE9e par"), _react["default"].createElement(TableCell, {
    align: "right"
  }, "date"), _react["default"].createElement(TableCell, {
    align: "right"
  }, "statut"))), _react["default"].createElement(TableBody, null, rows.map(function (row) {
    return _react["default"].createElement(TableRow, {
      key: row.id
    }, _react["default"].createElement(TableCell, {
      component: "th",
      scope: "row"
    }, row.interventionType), _react["default"].createElement(TableCell, {
      align: "right"
    }, row.no), _react["default"].createElement(TableCell, {
      align: "right"
    }, row.requesterId), _react["default"].createElement(TableCell, {
      align: "right"
    }, row.interventionDate), _react["default"].createElement(TableCell, {
      align: "right"
    }, row.statut));
  }))));
};

exports["default"] = _default;