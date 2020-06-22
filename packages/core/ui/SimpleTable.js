"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _useAppContext2 = require("../app/UseContext/useAppContext");

var _DialogActions = _interopRequireDefault(require("./SpeedDialMenu/DialogActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var rows = _ref.rows,
      translationNamespace = _ref.translationNamespace,
      columns = _ref.columns,
      rowObjectKey = _ref.rowObjectKey,
      rowClicked = _ref.rowClicked,
      actions = _ref.actions;

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

  var columnName = function columnName(c) {
    if (typeof c === "string") {
      return c;
    }

    var name = c.name;
    return name;
  };

  var columnNameValue = function columnNameValue(c, o) {
    if (typeof x === "string") {
      return [c, o[c]];
    }

    var name = columnName(c);
    var value = c.value;
    var v = value;

    if (v && typeof v === "function") {
      v = v(o);
    } else {
      if (!v) v = o[name];
    }

    return [name, v];
  };

  var TableCellComponent = function TableCellComponent(object, column) {
    var _columnNameValue = columnNameValue(column, object),
        _columnNameValue2 = _slicedToArray(_columnNameValue, 2),
        n = _columnNameValue2[0],
        v = _columnNameValue2[1];

    return /*#__PURE__*/_react["default"].createElement(TableCell, {
      key: "col-".concat(n),
      onClick: function onClick() {
        return rowClicked && rowClicked(object) || null;
      }
    }, v);
  };

  return /*#__PURE__*/_react["default"].createElement(TableContainer, {
    component: Paper
  }, /*#__PURE__*/_react["default"].createElement(Table, {
    className: classes.table,
    "aria-label": "simple table"
  }, /*#__PURE__*/_react["default"].createElement(TableHead, null, /*#__PURE__*/_react["default"].createElement(TableRow, {
    key: "headers"
  }, columns.map(function (col) {
    var cname = columnName(col);
    return /*#__PURE__*/_react["default"].createElement(TableCell, {
      key: "header-".concat(cname)
    }, t("".concat(translationNamespace, ".").concat(cname)));
  }), actions && /*#__PURE__*/_react["default"].createElement(TableCell, {
    key: "header-actions"
  }, t('actions')))), /*#__PURE__*/_react["default"].createElement(TableBody, null, rows.map(function (object) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: "row-".concat(object[rowObjectKey])
    }, columns.map(function (column) {
      return TableCellComponent(object, column);
    }), actions && /*#__PURE__*/_react["default"].createElement(TableCell, {
      key: "col-actions-".concat(object.id)
    }, /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], {
      object: object,
      actions: actions
    })));
  }))));
};

exports["default"] = _default;