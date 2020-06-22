"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../ui/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default() {
  var _useUiContext = (0, _UseContext["default"])(),
      SnackBar = _useUiContext.SnackBar,
      Snackbar = _useUiContext.Snackbar,
      MuiAlert = _useUiContext.MuiAlert,
      makeStyles = _useUiContext.makeStyles;

  var Alert = function Alert(props) {
    return /*#__PURE__*/_react["default"].createElement(MuiAlert, _extends({
      elevation: 6,
      variant: "filled"
    }, props));
  };

  var handleClose = SnackBar.handleClose,
      snackBarOpened = SnackBar.snackBarOpened,
      alert = SnackBar.alert;
  var useStyles = makeStyles(function (theme) {
    return {
      root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2)
        }
      }
    };
  });
  var classes = useStyles();
  var msg = alert.msg,
      severity = alert.severity;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(Snackbar, {
    open: snackBarOpened,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/_react["default"].createElement(Alert, {
    key: msg,
    onClose: handleClose,
    severity: severity
  }, msg)));
};

exports["default"] = _default;