"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles;

  return makeStyles(function (theme) {
    return {
      root: {
        transform: 'translateZ(0px)',
        flexGrow: 1
      },
      exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(3),
        height: 380
      },
      radioGroup: {
        margin: theme.spacing(1, 0)
      },
      speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
          bottom: theme.spacing(2),
          right: theme.spacing(2)
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
          top: theme.spacing(2),
          left: theme.spacing(2)
        }
      }
    };
  })();
};

exports["default"] = _default;