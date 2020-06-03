"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _useAppContext2 = require("../app/UseContext/useAppContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var rows = _ref.rows,
      translationNamespace = _ref.translationNamespace,
      columns = _ref.columns,
      rowObjectKey = _ref.rowObjectKey,
      rowClicked = _ref.rowClicked;

  var _useAppContext = (0, _useAppContext2.useAppContext)(),
      useTranslate = _useAppContext.useTranslate;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

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

  var TableCellComponent = function TableCellComponent(object, column) {
    if (typeof column !== 'string') {
      var name = column.name,
          component = column.component;
      return _react["default"].createElement(TableCell, {
        key: "col-".concat(column, "_").concat(object[rowObjectKey])
      }, component(object[name]));
    }

    return _react["default"].createElement(TableCell, {
      key: "col-".concat(column, "_").concat(object[rowObjectKey])
    }, object[column]);
  };

  return _react["default"].createElement(TableContainer, {
    component: Paper
  }, _react["default"].createElement(Table, {
    className: classes.table,
    "aria-label": "simple table"
  }, _react["default"].createElement(TableHead, null, _react["default"].createElement(TableRow, {
    key: "headers"
  }, columns.map(function (cname) {
    return _react["default"].createElement(TableCell, {
      key: "header-".concat(cname)
    }, t("".concat(translationNamespace, ".").concat(cname)));
  }))), _react["default"].createElement(TableBody, null, rows.map(function (object) {
    return _react["default"].createElement(TableRow, {
      key: "row-".concat(object[rowObjectKey]),
      onClick: rowClicked(object)
    }, columns.map(function (column) {
      return TableCellComponent(object, column);
    }));
  }))));
};

exports["default"] = _default;