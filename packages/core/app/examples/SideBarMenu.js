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
    })));
  };

  return _react["default"].createElement(TemporaryDrawer, {
    bottomItems: [],
    topItems: topItems()
  });
};

exports.SideBarMenu = SideBarMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXhhbXBsZXMvU2lkZUJhck1lbnUudHN4Il0sIm5hbWVzIjpbIlNpZGVCYXJNZW51IiwiYXBwQ29udGV4dCIsInVzZVJvdXRlciIsInJvdXRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1JY29uIiwiTWFpbEljb24iLCJEaXZpZGVyIiwiVGVtcG9yYXJ5RHJhd2VyIiwidG9wSXRlbXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQy9CLE1BQU1DLFVBQVUsR0FBRyw4QkFBbkI7QUFEK0IsTUFHdkJDLFNBSHVCLEdBR1RELFVBSFMsQ0FHdkJDLFNBSHVCO0FBSS9CLE1BQU1DLE1BQU0sR0FBR0QsU0FBUyxFQUF4Qjs7QUFKK0Isc0JBS3NELDZCQUx0RDtBQUFBLE1BS3ZCRSxRQUx1QixpQkFLdkJBLFFBTHVCO0FBQUEsTUFLYkMsWUFMYSxpQkFLYkEsWUFMYTtBQUFBLE1BS0NDLFlBTEQsaUJBS0NBLFlBTEQ7QUFBQSxNQUtlQyxRQUxmLGlCQUtlQSxRQUxmO0FBQUEsTUFLeUJDLE9BTHpCLGlCQUt5QkEsT0FMekI7QUFBQSxNQUtrQ0MsZUFMbEMsaUJBS2tDQSxlQUxsQzs7QUFPL0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUNmLGtFQUNFLGdDQUFDLFFBQUQ7QUFBVSxNQUFBLE1BQU0sTUFBaEI7QUFBaUIsTUFBQSxHQUFHLEVBQUM7QUFBckIsT0FDRSxnQ0FBQyxZQUFEO0FBQWMsTUFBQSxPQUFPLEVBQUMsTUFBdEI7QUFBNkIsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNUCxNQUFNLENBQUNRLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQTtBQUF0QyxNQURGLENBREYsRUFJRSxnQ0FBQyxPQUFELE9BSkYsRUFLRSxnQ0FBQyxRQUFEO0FBQVUsTUFBQSxNQUFNLE1BQWhCO0FBQWlCLE1BQUEsR0FBRyxFQUFDO0FBQXJCLE9BQ0UsZ0NBQUMsWUFBRDtBQUFjLE1BQUEsT0FBTyxFQUFDLElBQXRCO0FBQTJCLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTVIsTUFBTSxDQUFDUSxJQUFQLENBQVksS0FBWixDQUFOO0FBQUE7QUFBcEMsTUFERixDQUxGLEVBUUUsZ0NBQUMsT0FBRCxPQVJGLEVBU0UsZ0NBQUMsUUFBRDtBQUFVLE1BQUEsTUFBTSxNQUFoQjtBQUFpQixNQUFBLEdBQUcsRUFBQztBQUFyQixPQUNFLGdDQUFDLFlBQUQsUUFBYyxnQ0FBQyxRQUFELE9BQWQsQ0FERixFQUVFLGdDQUFDLFlBQUQ7QUFBYyxNQUFBLE9BQU8sRUFBQyxNQUF0QjtBQUE2QixNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU1SLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLE9BQVosQ0FBTjtBQUFBO0FBQXRDLE1BRkYsQ0FURixDQURlO0FBQUEsR0FBakI7O0FBaUJBLFNBQ0UsZ0NBQUMsZUFBRDtBQUFpQixJQUFBLFdBQVcsRUFBRSxFQUE5QjtBQUFrQyxJQUFBLFFBQVEsRUFBRUQsUUFBUTtBQUFwRCxJQURGO0FBR0QsQ0EzQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuLi8uLi91aS9Vc2VDb250ZXh0JztcbmltcG9ydCB1c2VBcHBDb250ZXh0IGZyb20gJy4uL1VzZUNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgU2lkZUJhck1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KCk7XG5cbiAgY29uc3QgeyB1c2VSb3V0ZXIgfSA9IGFwcENvbnRleHQ7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIExpc3RJdGVtSWNvbiwgTWFpbEljb24sIERpdmlkZXIsIFRlbXBvcmFyeURyYXdlciB9ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgY29uc3QgdG9wSXRlbXMgPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PVwiMFwiPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJIb21lXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9XCIxXCI+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJjXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9yYycpfSAvPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT1cIjJcIj5cbiAgICAgICAgPExpc3RJdGVtSWNvbj48TWFpbEljb24gLz48L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRm9ybVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvZm9ybScpfSAvPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxUZW1wb3JhcnlEcmF3ZXIgYm90dG9tSXRlbXM9e1tdfSB0b3BJdGVtcz17dG9wSXRlbXMoKX0gLz5cbiAgKTtcbn07XG4iXX0=