"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleTabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Context = _interopRequireDefault(require("../app/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var a11yProps = function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
};

var SimpleTabs = function SimpleTabs(props) {
  var appContext = (0, _Context["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      AppBar = _useUiContext.AppBar,
      Tabs = _useUiContext.Tabs,
      Tab = _useUiContext.Tab;

  var useRouter = appContext.useRouter;
  var router = useRouter();
  var tabs = props.tabs;

  var _useUiContext2 = (0, _UseContext["default"])(),
      makeStyles = _useUiContext2.makeStyles;

  var useStyles = makeStyles(function (theme) {
    return {
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginLeft: -theme.spacing(4),
        marginRight: -theme.spacing(4)
      }
    };
  });
  var classes = useStyles();

  var initTab = function initTab() {
    var found = tabs.find(function (t) {
      var _t$props = t.props,
          path = _t$props.path,
          routepath = _t$props.routepath;
      return router.pathname.includes(routepath || path, 0);
    });
    return tabs.indexOf(found);
  };

  var tabChanged = function tabChanged(path) {
    return function () {
      return router.push(path);
    };
  };

  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(AppBar, {
    position: "static",
    color: "default",
    elevation: 2
  }, _react["default"].createElement(Tabs, {
    value: initTab(),
    "aria-label": "simple tabs example",
    textColor: "inherit",
    style: {
      paddingTop: 10
    },
    variant: "scrollable",
    scrollButtons: "auto" // centered

  }, tabs.map(function (child, index) {
    return _react["default"].createElement(Tab, _extends({
      key: child.key
    }, child.props, a11yProps(parseInt(index, 10)), {
      onClick: tabChanged(child.props.path)
    }));
  }))));
};

exports.SimpleTabs = SimpleTabs;