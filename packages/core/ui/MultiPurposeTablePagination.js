"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _ArrowForward = _interopRequireDefault(require("@material-ui/icons/ArrowForward"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var perPageOptions = [5, 10, 15, 25, 50, 100];
var initialConnectionFilters = {
  first: 10,
  last: null,
  after: null,
  before: null,
  reverse: null,
  sortKey: null,
  query: ''
};

function MultiPurposeTablePagination(props) {
  var _useUiContext = (0, _UseContext["default"])(),
      IconButton = _useUiContext.IconButton,
      SelectMui = _useUiContext.SelectMui;

  var connectionState = props.connectionState,
      pageInfo = props.pageInfo;
  var connection = connectionState.state,
      setState = connectionState.setState;
  var first = connection.first,
      last = connection.last,
      sortKey = connection.sortKey,
      reverse = connection.reverse;
  var startCursor = pageInfo.startCursor,
      endCursor = pageInfo.endCursor,
      hasNextPage = pageInfo.hasNextPage,
      hasPreviousPage = pageInfo.hasPreviousPage;

  var handleRowChange = function handleRowChange(_ref) {
    var target = _ref.target;
    var value = target.value;
    setState(_objectSpread({}, initialConnectionFilters, {
      sortKey: sortKey,
      reverse: reverse,
      first: value
    }));
  };

  var handleBack = function handleBack() {
    var perPage = first || last;
    setState(_objectSpread({}, connection, {
      before: startCursor,
      after: null,
      last: perPage,
      first: null
    }));
  };

  var handleNext = function handleNext() {
    var perPage = first || last;
    setState(_objectSpread({}, connection, {
      before: null,
      after: endCursor,
      first: perPage,
      last: null
    }));
  };

  return _react["default"].createElement(_TableFooter["default"], {
    component: "div"
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex'
    },
    id: "multipurpose_table_pagination_wrapper"
  }, _react["default"].createElement(SelectMui, {
    id: "multipurpose_table_pagination_rows_per_page_select",
    name: first ? 'first' : 'last',
    label: "Rows Per Page",
    onChange: handleRowChange,
    options: perPageOptions,
    value: first || last
  }), _react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react["default"].createElement(IconButton, {
    id: "multipurpose_table_pagination_previous_page_button",
    disabled: !hasPreviousPage,
    onClick: handleBack
  }, _react["default"].createElement(_ArrowBack["default"], null)), _react["default"].createElement(IconButton, {
    id: "multipurpose_table_pagination_next_page_button",
    disabled: !hasNextPage,
    onClick: handleNext
  }, _react["default"].createElement(_ArrowForward["default"], null)))));
}

MultiPurposeTablePagination.propTypes = {
  connectionState: PropTypes.object.isRequired,
  pageInfo: PropTypes.object.isRequired
};

var _default = (0, _react.memo)(MultiPurposeTablePagination);

exports["default"] = _default;