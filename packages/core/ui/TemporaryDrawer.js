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

  return _react["default"].createElement("div", null, _react["default"].createElement(Drawer, {
    open: state,
    onClose: toggleDrawer(false)
  }, sideList()));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9UZW1wb3JhcnlEcmF3ZXIudHN4Il0sIm5hbWVzIjpbInRvcEl0ZW1zIiwiYm90dG9tSXRlbXMiLCJtYWtlU3R5bGVzIiwiRHJhd2VyU3RhdGUiLCJ1c2VTdHlsZXMiLCJsaXN0Iiwid2lkdGgiLCJmdWxsTGlzdCIsImNsYXNzZXMiLCJ0b2dnbGVEcmF3ZXIiLCJzdGF0ZSIsIkxpc3QiLCJEaXZpZGVyIiwiRHJhd2VyIiwic2lkZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlLHdCQUE2QjtBQUFBLE1BQTNCQSxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLHNCQUNSLDZCQURRO0FBQUEsTUFDbkNDLFVBRG1DLGlCQUNuQ0EsVUFEbUM7QUFBQSxNQUN2QkMsV0FEdUIsaUJBQ3ZCQSxXQUR1Qjs7QUFFMUMsTUFBTUMsU0FBUyxHQUFHRixVQUFVLENBQUM7QUFDM0JHLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUU7QUFESCxLQURxQjtBQUkzQkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JELE1BQUFBLEtBQUssRUFBRTtBQURDO0FBSmlCLEdBQUQsQ0FBNUI7QUFTQSxNQUFNRSxPQUFPLEdBQUdKLFNBQVMsRUFBekI7QUFYMEMsTUFZbkNLLFlBWm1DLEdBWVpOLFdBWlksQ0FZbkNNLFlBWm1DO0FBQUEsTUFZckJDLEtBWnFCLEdBWVpQLFdBWlksQ0FZckJPLEtBWnFCOztBQUFBLHVCQWNWLDZCQWRVO0FBQUEsTUFjbkNDLElBZG1DLGtCQWNuQ0EsSUFkbUM7QUFBQSxNQWM3QkMsT0FkNkIsa0JBYzdCQSxPQWQ2QjtBQUFBLE1BY3BCQyxNQWRvQixrQkFjcEJBLE1BZG9COztBQWdCMUMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUNmO0FBQ0UsTUFBQSxTQUFTLEVBQUVOLE9BQU8sQ0FBQ0gsSUFEckI7QUFFRSxNQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsTUFBQSxPQUFPLEVBQUVJLFlBQVksQ0FBQyxLQUFELENBSHZCO0FBSUUsTUFBQSxTQUFTLEVBQUVBLFlBQVksQ0FBQyxLQUFEO0FBSnpCLE9BTUUsZ0NBQUMsSUFBRCxRQUNHVCxRQURILENBTkYsRUFTRSxnQ0FBQyxPQUFELE9BVEYsRUFVRSxnQ0FBQyxJQUFELFFBQ0dDLFdBREgsQ0FWRixDQURlO0FBQUEsR0FBakI7O0FBaUJBLFNBQ0UsNkNBQ0UsZ0NBQUMsTUFBRDtBQUFRLElBQUEsSUFBSSxFQUFFUyxLQUFkO0FBQXFCLElBQUEsT0FBTyxFQUFFRCxZQUFZLENBQUMsS0FBRDtBQUExQyxLQUNHSyxRQUFRLEVBRFgsQ0FERixDQURGO0FBT0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVWlDb250ZXh0IGZyb20gJy4vVXNlQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7dG9wSXRlbXMsIGJvdHRvbUl0ZW1zfSkgPT4ge1xuICBjb25zdCB7bWFrZVN0eWxlcywgRHJhd2VyU3RhdGV9ID0gdXNlVWlDb250ZXh0KCk7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIGxpc3Q6IHtcbiAgICAgIHdpZHRoOiAyNTAsXG4gICAgfSxcbiAgICBmdWxsTGlzdDoge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHt0b2dnbGVEcmF3ZXIsIHN0YXRlfSA9IERyYXdlclN0YXRlO1xuXG4gIGNvbnN0IHtMaXN0LCBEaXZpZGVyLCBEcmF3ZXJ9ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgY29uc3Qgc2lkZUxpc3QgPSAoKSA9PiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHt0b3BJdGVtc31cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7Ym90dG9tSXRlbXN9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGZhbHNlKX0+XG4gICAgICAgIHtzaWRlTGlzdCgpfVxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=