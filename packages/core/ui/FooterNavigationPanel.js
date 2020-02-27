"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterNavigationPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FooterNavigationPanel = function FooterNavigationPanel(_ref) {
  var onClose = _ref.onClose;
  var appContext = (0, _UseContext2["default"])();
  var useRouter = appContext.useRouter;
  var router = useRouter();

  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles,
      Paper = _useUiContext.Paper,
      Grid = _useUiContext.Grid,
      IconButton = _useUiContext.IconButton,
      PeopleAltIcon = _useUiContext.PeopleAltIcon,
      BusinessIcon = _useUiContext.BusinessIcon,
      PostAddIcon = _useUiContext.PostAddIcon,
      Tooltip = _useUiContext.Tooltip,
      Zoom = _useUiContext.Zoom;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var useStyles = makeStyles(function (theme) {
    return {
      root: {
        // flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(5),
        position: 'fixed',
        width: 300,
        height: 150,
        bottom: 40,
        left: 40,
        zIndex: 300,
        borderRadius: 10
      },
      icons: {
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

  var handleClick = function handleClick(url) {
    return function () {
      onClose();
      router.push(url);
    };
  };

  return _react["default"].createElement(Paper, {
    elevation: 5,
    className: classes.root
  }, _react["default"].createElement(Grid, {
    container: true,
    spacing: 2,
    justify: "space-around",
    alignItems: "center"
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Zoom, {
    "in": isOpen,
    style: {
      transitionDelay: isOpen ? '200ms' : '0ms'
    }
  }, _react["default"].createElement(Tooltip, {
    title: "Centres",
    "aria-label": "add",
    placement: "bottom"
  }, _react["default"].createElement(IconButton, {
    color: "primary",
    "aria-label": "open navigation panel",
    edge: "start",
    onClick: handleClick('/centers')
  }, _react["default"].createElement(BusinessIcon, null))))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Zoom, {
    "in": isOpen,
    style: {
      transitionDelay: isOpen ? '400ms' : '0ms'
    }
  }, _react["default"].createElement(Tooltip, {
    title: "Cat\xE9gories de publications",
    "aria-label": "add",
    placement: "bottom"
  }, _react["default"].createElement(IconButton, {
    color: "primary",
    "aria-label": "open navigation panel",
    edge: "start",
    onClick: handleClick('/categories')
  }, _react["default"].createElement(PostAddIcon, null))))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Zoom, {
    "in": isOpen,
    style: {
      transitionDelay: isOpen ? '600ms' : '0ms'
    }
  }, _react["default"].createElement(Tooltip, {
    title: "Usagers",
    "aria-label": "add",
    placement: "bottom"
  }, _react["default"].createElement(IconButton, {
    color: "primary",
    "aria-label": "open navigation panel",
    edge: "start",
    onClick: handleClick('/users')
  }, _react["default"].createElement(PeopleAltIcon, null)))))));
};

exports.FooterNavigationPanel = FooterNavigationPanel;