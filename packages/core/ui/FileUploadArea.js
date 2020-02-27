"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _ChipsArray = require("./ChipsArray");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FileUploadArea = function FileUploadArea(_ref) {
  var chipsData = _ref.chipsData,
      chipClicked = _ref.chipClicked,
      chipDeleted = _ref.chipDeleted;

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Typography = _useUiContext.Typography,
      Paper = _useUiContext.Paper,
      Box = _useUiContext.Box;

  return _react["default"].createElement(Grid, {
    container: true,
    spacing: 1
  }, _react["default"].createElement(Grid, {
    container: true,
    item: true,
    sm: 12
  }, _react["default"].createElement(Typography, {
    variant: "caption",
    color: "textSecondary"
  }, "Fichiers ajout\xE9s")), _react["default"].createElement(Grid, {
    container: true,
    item: true
  }, _react["default"].createElement(Box, {
    mb: 1
  }, _react["default"].createElement(Paper, {
    elevation: 0
  }, _react["default"].createElement(Box, {
    padding: 1
  }, _react["default"].createElement(_ChipsArray.ChipsArray, {
    chipClicked: chipClicked,
    chipsData: chipsData,
    chipDeleted: chipDeleted
  }))))));
};

exports.FileUploadArea = FileUploadArea;