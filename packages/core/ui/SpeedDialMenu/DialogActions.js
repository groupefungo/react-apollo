"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _ConfirmActionDialog = _interopRequireDefault(require("../ConfirmActionDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      Fade = _useUiContext.Fade;

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    "aria-controls": "fade-menu",
    "aria-haspopup": "true",
    onClick: opened,
    id: "dialogActions-".concat(object.id)
  }, /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)), /*#__PURE__*/_react["default"].createElement(_ConfirmActionDialog["default"], {
    open: openWarning,
    setOpen: setOpenWarning,
    action: warningAction
  }), /*#__PURE__*/_react["default"].createElement(Menu, {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: closed,
    TransitionComponent: Fade
  }, actions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(MenuItem, {
      key: "dialogAction-".concat(option.name),
      onClick: itemClicked(option),
      id: "dialogAction-".concat(option.name, "-").concat(object.id)
    }, /*#__PURE__*/_react["default"].createElement(ListItemIcon, null, option.icon), /*#__PURE__*/_react["default"].createElement(Typography, {
      variant: "inherit"
    }, option.name));
  })));
};

exports["default"] = _default;