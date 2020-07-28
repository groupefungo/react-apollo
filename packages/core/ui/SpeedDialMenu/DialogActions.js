"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _ConfirmActionDialog = _interopRequireDefault(require("../ConfirmActionDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var actions = _ref.actions,
      object = _ref.object;

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openWarning = _useState2[0],
      setOpenWarning = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      warningAction = _useState4[0],
      setWarningAction = _useState4[1];

  var open = Boolean(anchorEl);

  var opened = function opened(event) {
    setAnchorEl(event.currentTarget);
  };

  var closed = function closed() {
    setAnchorEl(null);
  };

  var itemClicked = function itemClicked(action) {
    return function () {
      closed();
      var clicked = action.clicked,
          confirmMessage = action.confirmMessage;

      if (confirmMessage) {
        action.object = object;
        setWarningAction(action);
        setOpenWarning(true);
      } else {
        clicked(object);
      }
    };
  };

  var _useUiContext = (0, _UseContext["default"])(),
      Menu = _useUiContext.Menu,
      MenuItem = _useUiContext.MenuItem,
      ListItemIcon = _useUiContext.ListItemIcon,
      Typography = _useUiContext.Typography,
      Fade = _useUiContext.Fade,
      MoreVertIcon = _useUiContext.MoreVertIcon,
      Button = _useUiContext.Button;

  return _react["default"].createElement("div", null, _react["default"].createElement(Button, {
    "aria-controls": "fade-menu",
    "aria-haspopup": "true",
    onClick: opened,
    id: "dialogActions-".concat(object.id)
  }, _react["default"].createElement(MoreVertIcon, null)), _react["default"].createElement(_ConfirmActionDialog["default"], {
    open: openWarning,
    setOpen: setOpenWarning,
    action: warningAction
  }), _react["default"].createElement(Menu, {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: closed,
    TransitionComponent: Fade
  }, actions.map(function (option) {
    return _react["default"].createElement(MenuItem, {
      key: "dialogAction-".concat(option.name),
      onClick: itemClicked(option),
      id: "dialogAction-".concat(option.name, "-").concat(object.id)
    }, _react["default"].createElement(ListItemIcon, null, option.icon), _react["default"].createElement(Typography, {
      variant: "inherit"
    }, option.name));
  })));
};

exports["default"] = _default;