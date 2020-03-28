"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBarMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

var _UseContext2 = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SideBarMenu = function SideBarMenu() {
  var appContext = (0, _UseContext2["default"])();
  var useRouter = appContext.useRouter;
  var router = useRouter();

  var _useUiContext = (0, _UseContext["default"])(),
      ListItem = _useUiContext.ListItem,
      ListItemText = _useUiContext.ListItemText,
      ListItemIcon = _useUiContext.ListItemIcon,
      MailIcon = _useUiContext.MailIcon,
      Divider = _useUiContext.Divider,
      TemporaryDrawer = _useUiContext.TemporaryDrawer;

  var topItems = function topItems() {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(ListItem, {
      button: true,
      key: "0"
    }, _react["default"].createElement(ListItemText, {
      primary: "Home",
      onClick: function onClick() {
        return router.push('/');
      }
    })), _react["default"].createElement(Divider, null), _react["default"].createElement(ListItem, {
      button: true,
      key: "1"
    }, _react["default"].createElement(ListItemText, {
      primary: "Rc",
      onClick: function onClick() {
        return router.push('/rc');
      }
    })), _react["default"].createElement(Divider, null), _react["default"].createElement(ListItem, {
      button: true,
      key: "2"
    }, _react["default"].createElement(ListItemIcon, null, _react["default"].createElement(MailIcon, null)), _react["default"].createElement(ListItemText, {
      primary: "Form",
      onClick: function onClick() {
        return router.push('/form');
      }
    })), _react["default"].createElement(ListItem, {
      button: true,
      key: "3"
    }, _react["default"].createElement(ListItemIcon, null), _react["default"].createElement(ListItemText, {
      primary: "DatePicker",
      onClick: function onClick() {
        return router.push('/datepicker');
      }
    })));
  };

  return _react["default"].createElement(TemporaryDrawer, {
    bottomItems: [],
    topItems: topItems()
  });
};

exports.SideBarMenu = SideBarMenu;