"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormStyles = void 0;

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFormStyles = function useFormStyles() {
  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles;

  return makeStyles(function (theme) {
    return {
      formControl: {// margin: theme.spacing(2),
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
      },
      formControlMedium: {
        padding: theme.spacing(1)
      }
    };
  });
};

exports.useFormStyles = useFormStyles;