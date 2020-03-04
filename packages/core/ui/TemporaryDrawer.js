"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var topItems = _ref.topItems,
      bottomItems = _ref.bottomItems;

  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles,
      DrawerState = _useUiContext.DrawerState;

  var useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  });
  var classes = useStyles();
  var toggleDrawer = DrawerState.toggleDrawer,
      state = DrawerState.state;

  var _useUiContext2 = (0, _UseContext["default"])(),
      List = _useUiContext2.List,
      Divider = _useUiContext2.Divider,
      Drawer = _useUiContext2.Drawer;

  var sideList = function sideList() {
    return _react["default"].createElement("div", {
      className: classes.list,
      role: "presentation",
      onClick: toggleDrawer(false),
      onKeyDown: toggleDrawer(false)
    }, _react["default"].createElement(List, null, topItems), _react["default"].createElement(Divider, null), _react["default"].createElement(List, null, bottomItems));
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, _react["default"].createElement(Drawer, {
    open: state,
    onClose: toggleDrawer(false)
  }, sideList())));
};

exports["default"] = _default;