"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var open = props.open,
      title = props.title,
      handleCancel = props.handleCancel,
      handleConfirm = props.handleConfirm;

  var _useUiContext = (0, _UseContext["default"])(),
      Dialog = _useUiContext.Dialog,
      Button = _useUiContext.Button;

  return /*#__PURE__*/_react["default"].createElement(Dialog, {
    open: open,
    onClose: handleCancel,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Effacer ".concat(title, "?")), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, "Cliquez sur le bouton supprimer pour confirmer votre d\xE9cision.")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: handleCancel,
    color: "primary"
  }, "Annuler"), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: handleConfirm,
    color: "primary",
    autoFocus: true
  }, "Supprimer")));
};

exports["default"] = _default;