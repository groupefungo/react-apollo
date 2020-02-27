"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Context = _interopRequireDefault(require("../app/Context"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _ChipsArray = require("../ChipsArray");

var _useChipFiles2 = _interopRequireDefault(require("../hooks/useChipFiles"));

var _CustomCardHeader = require("./CustomCardHeader");

var _DeleteWarning = require("./DeleteWarning");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CardControl = function CardControl(props) {
  var title = props.title,
      description = props.description,
      category = props.category,
      action = props.action,
      actionLabel = props.actionLabel,
      files = props.files,
      date = props.date,
      id = props.id,
      deleteCardFunction = props.deleteCardFunction;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openDeleteWarning = _useState4[0],
      setOpenDeleteWarning = _useState4[1];

  var appContext = (0, _Context["default"])();
  var useRouter = appContext.useRouter;
  var router = useRouter();

  var _useChipFiles = (0, _useChipFiles2["default"])(files),
      chipsData = _useChipFiles.chipsData,
      _chipClicked = _useChipFiles.chipClicked;

  var handleClose = function handleClose() {
    return setOpenDeleteWarning(false);
  };

  var handleConfirm = function handleConfirm() {
    deleteCardFunction(id);
    handleClose();
    router.push('/');
  };

  var _useUiContext = (0, _UseContext["default"])(),
      Card = _useUiContext.Card,
      CardHeader = _useUiContext.CardHeader,
      Divider = _useUiContext.Divider,
      Button = _useUiContext.Button,
      CardContent = _useUiContext.CardContent,
      CardActions = _useUiContext.CardActions,
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box,
      IconButton = _useUiContext.IconButton,
      Fade = _useUiContext.Fade,
      Grid = _useUiContext.Grid;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Box, {
    width: "inherit",
    height: "inherit"
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(_DeleteWarning.DeleteWarning, {
    open: openDeleteWarning,
    title: title,
    handleCancel: handleClose,
    handleConfirm: handleConfirm
  }), _react["default"].createElement(Box, {
    position: "relative",
    flexGrow: 1,
    margin: 1
  }, _react["default"].createElement(Card, {
    raised: isHovered,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, date && _react["default"].createElement(Box, {
    top: -10,
    left: -10,
    position: "absolute"
  }, _react["default"].createElement(_CustomCardHeader.CustomCardHeader, {
    createdAt: date
  })), deleteCardFunction && _react["default"].createElement(Fade, {
    "in": isHovered,
    timeout: 300,
    style: {
      transitionDelay: isHovered ? '300ms' : '0ms'
    }
  }, _react["default"].createElement(Box, {
    top: -20,
    right: -20,
    position: "absolute",
    zIndex: 3
  }, _react["default"].createElement(IconButton, {
    onClick: function onClick() {
      return setOpenDeleteWarning(true);
    }
  }, _react["default"].createElement(_Cancel["default"], {
    fontSize: "small",
    color: "primary"
  })))), _react["default"].createElement(CardHeader, {
    title: title,
    titleTypographyProps: {
      variant: 'h5',
      color: 'primary'
    }
  }), _react["default"].createElement(Divider, {
    light: true
  }), _react["default"].createElement(CardContent, null, description && _react["default"].createElement(Box, {
    flexGrow: 1
  }, _react["default"].createElement(Typography, {
    color: "textPrimary",
    paragraph: true
  }, description)), files && files.length > 0 && _react["default"].createElement(Box, null, _react["default"].createElement(_ChipsArray.ChipsArray, {
    chipsData: chipsData(),
    chipClicked: function chipClicked(file) {
      return _chipClicked(file);
    },
    size: "small"
  }))), _react["default"].createElement(CardActions, null, category && _react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }, category), !category && _react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }), _react["default"].createElement(Button, {
    size: "small",
    color: "primary",
    onClick: action
  }, actionLabel)))))));
};

exports.CardControl = CardControl;