"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var a11yProps = function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
};

var _default = function _default(props) {
  var appContext = (0, _UseContext2["default"])();

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

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9TaW1wbGVUYWJzLnRzeCJdLCJuYW1lcyI6WyJhMTF5UHJvcHMiLCJpbmRleCIsImlkIiwicHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwQmFyIiwiVGFicyIsIlRhYiIsInVzZVJvdXRlciIsInJvdXRlciIsInRhYnMiLCJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsImNsYXNzZXMiLCJpbml0VGFiIiwiZm91bmQiLCJmaW5kIiwidCIsInBhdGgiLCJyb3V0ZXBhdGgiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsInRhYkNoYW5nZWQiLCJwdXNoIiwicGFkZGluZ1RvcCIsIm1hcCIsImNoaWxkIiwia2V5IiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQ0VDLElBQUFBLEVBQUUsdUJBQWdCRCxLQUFoQixDQURKO0FBRUUsK0NBQW9DQSxLQUFwQztBQUZGLEdBRGdCO0FBQUEsQ0FBbEI7O2VBT2Usa0JBQUNFLEtBQUQsRUFBVztBQUN4QixNQUFNQyxVQUFVLEdBQUcsOEJBQW5COztBQUR3QixzQkFFTSw2QkFGTjtBQUFBLE1BRWhCQyxNQUZnQixpQkFFaEJBLE1BRmdCO0FBQUEsTUFFUkMsSUFGUSxpQkFFUkEsSUFGUTtBQUFBLE1BRUZDLEdBRkUsaUJBRUZBLEdBRkU7O0FBQUEsTUFJaEJDLFNBSmdCLEdBSUZKLFVBSkUsQ0FJaEJJLFNBSmdCO0FBS3hCLE1BQU1DLE1BQU0sR0FBR0QsU0FBUyxFQUF4QjtBQUx3QixNQU9oQkUsSUFQZ0IsR0FPUFAsS0FQTyxDQU9oQk8sSUFQZ0I7O0FBQUEsdUJBU0QsNkJBVEM7QUFBQSxNQVNoQkMsVUFUZ0Isa0JBU2hCQSxVQVRnQjs7QUFVeEIsTUFBTUMsU0FBUyxHQUFHRCxVQUFVLENBQUMsVUFBQ0UsS0FBRDtBQUFBLFdBQVk7QUFDdkNDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxRQUFRLEVBQUUsQ0FETjtBQUVKQyxRQUFBQSxlQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxVQUFkLENBQXlCQyxLQUZ0QztBQUdKQyxRQUFBQSxVQUFVLEVBQUUsQ0FBQ1AsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxDQUhUO0FBSUpDLFFBQUFBLFdBQVcsRUFBRSxDQUFDVCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkO0FBSlY7QUFEaUMsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUFTQSxNQUFNRSxPQUFPLEdBQUdYLFNBQVMsRUFBekI7O0FBRUEsTUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFNQyxLQUFLLEdBQUdmLElBQUksQ0FBQ2dCLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQU87QUFBQSxxQkFDREEsQ0FBQyxDQUFDeEIsS0FERDtBQUFBLFVBQ3JCeUIsSUFEcUIsWUFDckJBLElBRHFCO0FBQUEsVUFDZkMsU0FEZSxZQUNmQSxTQURlO0FBRTdCLGFBQU9wQixNQUFNLENBQUNxQixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkYsU0FBUyxJQUFJRCxJQUF0QyxFQUE0QyxDQUE1QyxDQUFQO0FBQ0QsS0FIYSxDQUFkO0FBSUEsV0FBT2xCLElBQUksQ0FBQ3NCLE9BQUwsQ0FBYVAsS0FBYixDQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxJQUFEO0FBQUEsV0FBVTtBQUFBLGFBQU1uQixNQUFNLENBQUN5QixJQUFQLENBQVlOLElBQVosQ0FBTjtBQUFBLEtBQVY7QUFBQSxHQUFuQjs7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVMLE9BQU8sQ0FBQ1Q7QUFBeEIsS0FDRSxnQ0FBQyxNQUFEO0FBQVEsSUFBQSxRQUFRLEVBQUMsUUFBakI7QUFBMEIsSUFBQSxLQUFLLEVBQUMsU0FBaEM7QUFBMEMsSUFBQSxTQUFTLEVBQUU7QUFBckQsS0FDRSxnQ0FBQyxJQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVVLE9BQU8sRUFEaEI7QUFFRSxrQkFBVyxxQkFGYjtBQUdFLElBQUEsU0FBUyxFQUFDLFNBSFo7QUFJRSxJQUFBLEtBQUssRUFBRTtBQUFFVyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUpUO0FBS0UsSUFBQSxPQUFPLEVBQUMsWUFMVjtBQU1FLElBQUEsYUFBYSxFQUFDLE1BTmhCLENBT0U7O0FBUEYsS0FVSXpCLElBQUksQ0FBQzBCLEdBQUwsQ0FBUyxVQUFDQyxLQUFELEVBQVFwQyxLQUFSO0FBQUEsV0FDUCxnQ0FBQyxHQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVvQyxLQUFLLENBQUNDO0FBRGIsT0FFTUQsS0FBSyxDQUFDbEMsS0FGWixFQUdNSCxTQUFTLENBQUN1QyxRQUFRLENBQUN0QyxLQUFELEVBQVEsRUFBUixDQUFULENBSGY7QUFJRSxNQUFBLE9BQU8sRUFBRWdDLFVBQVUsQ0FBQ0ksS0FBSyxDQUFDbEMsS0FBTixDQUFZeUIsSUFBYjtBQUpyQixPQURPO0FBQUEsR0FBVCxDQVZKLENBREYsQ0FERixDQURGO0FBMEJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuL1VzZUNvbnRleHQnO1xuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSAnLi4vYXBwL1VzZUNvbnRleHQnO1xuXG5jb25zdCBhMTF5UHJvcHMgPSAoaW5kZXgpID0+IChcbiAge1xuICAgIGlkOiBgc2ltcGxlLXRhYi0ke2luZGV4fWAsXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgc2ltcGxlLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IHsgQXBwQmFyLCBUYWJzLCBUYWIgfSA9IHVzZVVpQ29udGV4dCgpO1xuXG4gIGNvbnN0IHsgdXNlUm91dGVyIH0gPSBhcHBDb250ZXh0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHRhYnMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgbWFrZVN0eWxlcyB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBtYXJnaW5MZWZ0OiAtdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgIG1hcmdpblJpZ2h0OiAtdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGluaXRUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSB0YWJzLmZpbmQoKHQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgcm91dGVwYXRoIH0gPSB0LnByb3BzO1xuICAgICAgcmV0dXJuIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhyb3V0ZXBhdGggfHwgcGF0aCwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhYnMuaW5kZXhPZihmb3VuZCk7XG4gIH07XG5cbiAgY29uc3QgdGFiQ2hhbmdlZCA9IChwYXRoKSA9PiAoKSA9PiByb3V0ZXIucHVzaChwYXRoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17Mn0+XG4gICAgICAgIDxUYWJzXG4gICAgICAgICAgdmFsdWU9e2luaXRUYWIoKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYnMgZXhhbXBsZVwiXG4gICAgICAgICAgdGV4dENvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAgfX1cbiAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXG4gICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxuICAgICAgICAgIC8vIGNlbnRlcmVkXG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWJzLm1hcCgoY2hpbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBrZXk9e2NoaWxkLmtleX1cbiAgICAgICAgICAgICAgICB7Li4uY2hpbGQucHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLmExMXlQcm9wcyhwYXJzZUludChpbmRleCwgMTApKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YWJDaGFuZ2VkKGNoaWxkLnByb3BzLnBhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==