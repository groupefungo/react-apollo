"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _ChipsArray = _interopRequireDefault(require("./ChipsArray"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var chipsData = _ref.chipsData,
      chipClicked = _ref.chipClicked,
      chipDeleted = _ref.chipDeleted;

  var _useAppContext = (0, _UseContext2["default"])(),
      useTranslate = _useAppContext.useTranslate;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Typography = _useUiContext.Typography,
      Paper = _useUiContext.Paper,
      Box = _useUiContext.Box;

  return /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(Typography, {
    variant: "caption",
    color: "textSecondary"
  }, t('uploaded_files'))), /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    item: true
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(Paper, {
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    padding: 1
  }, /*#__PURE__*/_react["default"].createElement(_ChipsArray["default"], {
    chipClicked: chipClicked,
    chipsData: chipsData,
    chipDeleted: chipDeleted
  }))))));
};

exports["default"] = _default;