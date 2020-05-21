"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Dialog = function Dialog() {
  var _useAppContext = (0, _UseContext2["default"])(),
      UseProcessing = _useAppContext.UseProcessing,
      useTranslate = _useAppContext.useTranslate;

  var processing = UseProcessing.processing;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

  var _useUiContext = (0, _UseContext["default"])(),
      Dialog = _useUiContext.Dialog,
      DialogTitle = _useUiContext.DialogTitle,
      DialogContent = _useUiContext.DialogContent,
      DialogContentText = _useUiContext.DialogContentText;

  return _react["default"].createElement(Dialog, {
    open: processing,
    onClose: null
  }, _react["default"].createElement(DialogTitle, null, "Un instant svp"), _react["default"].createElement(DialogContent, null, _react["default"].createElement(DialogContentText, {
    id: "dialogContentLoading"
  }, t('app.processing'))));
};

exports.Dialog = Dialog;