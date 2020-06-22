"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen,
      action = _ref.action;

  var _useAppContext = (0, _UseContext2["default"])(),
      useTranslate = _useAppContext.useTranslate;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

  var _useUiContext = (0, _UseContext["default"])(),
      Dialog = _useUiContext.Dialog,
      DialogActions = _useUiContext.DialogActions,
      DialogTitle = _useUiContext.DialogTitle,
      DialogContent = _useUiContext.DialogContent,
      DialogContentText = _useUiContext.DialogContentText,
      Button = _useUiContext.Button;

  var confirmed = function confirmed() {
    var clicked = action.clicked;
    clicked(action.object);
    setOpen(false);
  };

  return /*#__PURE__*/_react["default"].createElement(Dialog, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "".concat(action && action.name, "?")), /*#__PURE__*/_react["default"].createElement(DialogContent, null, /*#__PURE__*/_react["default"].createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, action && action.confirmMessage)), /*#__PURE__*/_react["default"].createElement(DialogActions, null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: function onClick() {
      return setOpen(false);
    },
    color: "primary"
  }, t('cancel')), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: confirmed,
    color: "primary",
    autoFocus: true
  }, t('yes'))));
};

exports["default"] = _default;