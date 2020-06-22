"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _CustomCardHeader = _interopRequireDefault(require("../CustomCardHeader"));

var _DeleteWarning = _interopRequireDefault(require("../DeleteWarning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var title = props.title,
      description = props.description,
      category = props.category,
      action = props.action,
      actionLabel = props.actionLabel,
      files = props.files,
      date = props.date,
      id = props.id,
      deleteCardFunction = props.deleteCardFunction,
      disabled = props.disabled;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openDeleteWarning = _useState4[0],
      setOpenDeleteWarning = _useState4[1];

  var handleClose = function handleClose() {
    return setOpenDeleteWarning(false);
  };

  var handleConfirm = function handleConfirm() {
    deleteCardFunction(id);
    handleClose();
  };

  var _useUiContext = (0, _UseContext["default"])(),
      Card = _useUiContext.Card,
      CardHeader = _useUiContext.CardHeader,
      Divider = _useUiContext.Divider,
      CardContent = _useUiContext.CardContent,
      CardActions = _useUiContext.CardActions,
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box,
      IconButton = _useUiContext.IconButton,
      Fade = _useUiContext.Fade,
      makeStyles = _useUiContext.makeStyles,
      AttachmentIcon = _useUiContext.AttachmentIcon,
      Tooltip = _useUiContext.Tooltip;

  var useStyles = makeStyles(function (theme) {
    return {
      description: {
        '&:after': {
          content: '""',
          width: '100%',
          height: '60px',
          position: 'absolute',
          left: 0,
          bottom: 30,
          background: "linear-gradient(transparent, ".concat(theme.palette.background.paper, ")")
        }
      },
      noMaxWidth: {
        maxWidth: 'none'
      }
    };
  });
  var classes = useStyles();

  var fileBadgeTooltip = /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      listStyleType: 'none',
      padding: 0
    }
  }, files && files.length > 0 && files.map(function (f) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: "file-".concat(f.id)
    }, f.filename);
  }));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Box, {
    width: "100%",
    flexGrow: 1,
    position: "relative"
  }, /*#__PURE__*/_react["default"].createElement(_DeleteWarning["default"], {
    open: openDeleteWarning,
    title: title,
    handleCancel: handleClose,
    handleConfirm: handleConfirm
  }), /*#__PURE__*/_react["default"].createElement(Card, {
    raised: isHovered,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, date && /*#__PURE__*/_react["default"].createElement(Box, {
    top: -10,
    left: -10,
    position: "absolute"
  }, /*#__PURE__*/_react["default"].createElement(_CustomCardHeader["default"], {
    createdAt: date,
    disabled: disabled
  })), deleteCardFunction && /*#__PURE__*/_react["default"].createElement(Fade, {
    "in": isHovered,
    timeout: 300,
    style: {
      transitionDelay: isHovered ? '300ms' : '0ms'
    }
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    top: -20,
    right: -20,
    position: "absolute",
    zIndex: 3
  }, /*#__PURE__*/_react["default"].createElement(IconButton, {
    onClick: function onClick() {
      return setOpenDeleteWarning(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Cancel["default"], {
    fontSize: "small",
    color: "primary",
    id: "card-delete-".concat(id)
  })))), /*#__PURE__*/_react["default"].createElement(CardHeader, {
    title: title,
    titleTypographyProps: {
      variant: 'h5',
      color: 'primary'
    }
  }), /*#__PURE__*/_react["default"].createElement(Divider, {
    light: true
  }), /*#__PURE__*/_react["default"].createElement(CardContent, null, description && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Box, {
    flexGrow: 1,
    mt: 2
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.description
  }, " ", description, "  ")), files && files.length > 0 && /*#__PURE__*/_react["default"].createElement(Box, {
    top: 40,
    right: 20,
    position: "absolute",
    zIndex: 3
  }, /*#__PURE__*/_react["default"].createElement(Tooltip, {
    title: fileBadgeTooltip,
    placement: "right",
    classes: {
      tooltip: classes.noMaxWidth
    }
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: files.length,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(AttachmentIcon, null)))))), /*#__PURE__*/_react["default"].createElement(CardActions, null, category && /*#__PURE__*/_react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }, category), !category && /*#__PURE__*/_react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }), /*#__PURE__*/_react["default"].createElement(IconButton, {
    onClick: action,
    title: actionLabel,
    id: "card-action-".concat(id)
  }, /*#__PURE__*/_react["default"].createElement(_Visibility["default"], {
    fontSize: "small",
    color: "primary"
  }))))));
};

exports["default"] = _default;