"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _lodash = require("lodash");

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _MultiPurposeTablePagination = _interopRequireDefault(require("./MultiPurposeTablePagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MultiPurposeTable(props) {
  var objects = props.objects,
      headers = props.headers,
      columns = props.columns,
      data = props.data,
      loading = props.loading,
      connectionState = props.connectionState,
      handleRowClick = props.handleRowClick;

  var _useUiContext = (0, _UseContext["default"])(),
      Container = _useUiContext.Container,
      Table = _useUiContext.Table,
      TableBody = _useUiContext.TableBody,
      TableContainer = _useUiContext.TableContainer,
      TableHead = _useUiContext.TableHead,
      TableRow = _useUiContext.TableRow,
      TableCell = _useUiContext.TableCell;

  var state = connectionState.state,
      setState = connectionState.setState;
  var first = state.first,
      last = state.last,
      sortKey = state.sortKey,
      reverse = state.reverse;

  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement(Table, null, /*#__PURE__*/_react["default"].createElement(TableHead, null, /*#__PURE__*/_react["default"].createElement(TableRow, null, headers.map(function (header) {
      return /*#__PURE__*/_react["default"].createElement(TableCell, {
        key: "".concat(header.sortKey, "_cell")
      }, header.label);
    }))), /*#__PURE__*/_react["default"].createElement(TableBody, null, (0, _lodash.times)(first, function (index) {
      return /*#__PURE__*/_react["default"].createElement(TableRow, {
        key: index
      }, (0, _lodash.times)(columns.length, function (index2) {
        return /*#__PURE__*/_react["default"].createElement(TableCell, {
          key: index2
        }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null));
      }));
    })))));
  }

  var _data$objects = data[objects],
      edges = _data$objects.edges,
      pageInfo = _data$objects.pageInfo;
  var list = edges.map(function (e) {
    return e.node;
  });

  var handleSortChange = function handleSortChange(newSortKey) {
    return function (e) {
      e.preventDefault();
      var name = first ? 'first' : 'last';
      var perPage = first || last;
      var isNewKey = newSortKey !== sortKey;

      if (isNewKey) {
        var _objectSpread2;

        setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, perPage), _defineProperty(_objectSpread2, "reverse", false), _defineProperty(_objectSpread2, "sortKey", newSortKey), _defineProperty(_objectSpread2, "before", null), _defineProperty(_objectSpread2, "after", null), _objectSpread2)));
      } else if (reverse) {
        setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({
          reverse: !reverse,
          sortKey: newSortKey
        }, name, perPage)));
      } else if (reverse == null) {
        setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({
          reverse: !!reverse,
          sortKey: newSortKey
        }, name, perPage)));
      } else {
        setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({
          reverse: !reverse,
          sortKey: newSortKey
        }, name, perPage)));
      }
    };
  };

  var TableCellComponent = function TableCellComponent(object, column) {
    if (typeof column !== 'string') {
      var name = column.name,
          component = column.component;
      return /*#__PURE__*/_react["default"].createElement(TableCell, {
        key: "".concat(column, "_").concat(object.id)
      }, component(object[name]));
    }

    return /*#__PURE__*/_react["default"].createElement(TableCell, {
      key: "".concat(column, "_").concat(object.id)
    }, object[column]);
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement(Table, null, /*#__PURE__*/_react["default"].createElement(TableHead, null, /*#__PURE__*/_react["default"].createElement(TableRow, null, headers.map(function (header) {
    return /*#__PURE__*/_react["default"].createElement(TableCell, {
      key: "".concat(header.sortKey, "_cell")
    }, /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
      key: "".concat(header.sortKey, "_cell_sort_label"),
      active: sortKey === header.sortKey,
      direction: reverse ? 'desc' : 'asc',
      onClick: handleSortChange(header.sortKey)
    }, header.label));
  }))), /*#__PURE__*/_react["default"].createElement(TableBody, null, list.map(function (object) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: object.id,
      onClick: handleRowClick(object.gid)
    }, columns.map(function (column) {
      return TableCellComponent(object, column);
    }));
  })))), /*#__PURE__*/_react["default"].createElement(_MultiPurposeTablePagination["default"], {
    connectionState: connectionState,
    pageInfo: pageInfo,
    count: list.length
  }));
}

MultiPurposeTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.func
  })])).isRequired,
  data: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.func
  })])).isRequired,
  loading: PropTypes.bool.isRequired,
  objects: PropTypes.string.isRequired,
  connectionState: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired
};

var _default = /*#__PURE__*/(0, _react.memo)(MultiPurposeTable);

exports["default"] = _default;