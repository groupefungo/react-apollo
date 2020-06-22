"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

var _FooterNavigationPanel = _interopRequireDefault(require("../FooterNavigationPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var appContext = (0, _UseContext2["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      Fade = _useUiContext.Fade,
      IconButton = _useUiContext.IconButton,
      Box = _useUiContext.Box,
      Typography = _useUiContext.Typography,
      Grid = _useUiContext.Grid,
      AppsIcon = _useUiContext.AppsIcon;

  var useAuth = appContext.useAuth;
  var auth = useAuth();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      bottomMenuVisible = _useState2[0],
      setBottomMenuVisible = _useState2[1];

  var handleChange = function handleChange() {
    if (bottomMenuVisible) setBottomMenuVisible(false);else setBottomMenuVisible(true);
  };

  var handleClickAway = function handleClickAway() {
    return setBottomMenuVisible(false);
  };

  var _useUiContext2 = (0, _UseContext["default"])(),
      makeStyles = _useUiContext2.makeStyles;

  var useStyles = makeStyles(function (theme) {
    return {
      root: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        position: 'fixed',
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        left: 0
      },
      iconsButton: {
        color: theme.palette.primary.contrastText,
        opacity: '50%'
      },
      logo: {
        color: theme.palette.primary.contrastText
      },
      greetings: {
        color: theme.palette.primary.contrastText
      }
    };
  });
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Box, {
    mt: 10
  }), /*#__PURE__*/_react["default"].createElement(Fade, {
    style: {
      zIndex: 300
    },
    "in": bottomMenuVisible,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_ClickAwayListener["default"], {
    onClickAway: handleClickAway
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_FooterNavigationPanel["default"], {
    onClose: handleChange
  })))), /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    spacing: 3,
    justify: "space-between",
    alignItems: "center",
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: function onClick() {
      return handleChange();
    },
    className: classes.iconsButton
  }, /*#__PURE__*/_react["default"].createElement(AppsIcon, null))), /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(Typography, {
    variant: "h5",
    className: classes.logo
  }, "Logo RCAAQ")), auth && auth.user && /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(Typography, {
    className: classes.greetings
  }, "Bonjour", auth.user.firstName))));
};

exports["default"] = _default;