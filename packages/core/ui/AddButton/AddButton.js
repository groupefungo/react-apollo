"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var title = _ref.title,
      routePath = _ref.routePath,
      customAction = _ref.customAction;
  var appContext = (0, _UseContext2["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Tooltip = _useUiContext.Tooltip,
      Fab = _useUiContext.Fab,
      AddIcon = _useUiContext.AddIcon;

  var useRouter = appContext.useRouter;
  var router = useRouter();
  if (routePath && customAction) return null;
  return _react["default"].createElement(Grid, {
    item: true,
    xs: 2,
    sm: 1
  }, _react["default"].createElement(Tooltip, {
    title: title,
    "aria-label": "add",
    placement: "left"
  }, _react["default"].createElement(Fab, {
    color: "secondary",
    "aria-label": "add",
    style: {
      zIndex: 1299,
      top: 30,
      right: 30,
      position: 'fixed'
    }
  }, customAction && _react["default"].createElement(AddIcon, {
    onClick: customAction
  }), routePath && _react["default"].createElement(AddIcon, {
    onClick: function onClick() {
      return router.push(routePath);
    }
  }))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9BZGRCdXR0b24vQWRkQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsInJvdXRlUGF0aCIsImN1c3RvbUFjdGlvbiIsImFwcENvbnRleHQiLCJHcmlkIiwiVG9vbHRpcCIsIkZhYiIsIkFkZEljb24iLCJ1c2VSb3V0ZXIiLCJyb3V0ZXIiLCJ6SW5kZXgiLCJ0b3AiLCJyaWdodCIsInBvc2l0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O2VBRWUsd0JBQXdDO0FBQUEsTUFBckNBLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3JELE1BQU1DLFVBQVUsR0FBRyw4QkFBbkI7O0FBRHFELHNCQUViLDZCQUZhO0FBQUEsTUFFN0NDLElBRjZDLGlCQUU3Q0EsSUFGNkM7QUFBQSxNQUV2Q0MsT0FGdUMsaUJBRXZDQSxPQUZ1QztBQUFBLE1BRTlCQyxHQUY4QixpQkFFOUJBLEdBRjhCO0FBQUEsTUFFekJDLE9BRnlCLGlCQUV6QkEsT0FGeUI7O0FBQUEsTUFJN0NDLFNBSjZDLEdBSS9CTCxVQUorQixDQUk3Q0ssU0FKNkM7QUFLckQsTUFBTUMsTUFBTSxHQUFHRCxTQUFTLEVBQXhCO0FBQ0EsTUFBSVAsU0FBUyxJQUFJQyxZQUFqQixFQUErQixPQUFPLElBQVA7QUFFL0IsU0FDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxJQUFJLE1BQVY7QUFBVyxJQUFBLEVBQUUsRUFBRSxDQUFmO0FBQWtCLElBQUEsRUFBRSxFQUFFO0FBQXRCLEtBQ0UsZ0NBQUMsT0FBRDtBQUFTLElBQUEsS0FBSyxFQUFFRixLQUFoQjtBQUF1QixrQkFBVyxLQUFsQztBQUF3QyxJQUFBLFNBQVMsRUFBQztBQUFsRCxLQUNFLGdDQUFDLEdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxXQURSO0FBRUUsa0JBQVcsS0FGYjtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQ0xVLE1BQUFBLE1BQU0sRUFBRSxJQURIO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSxFQUZBO0FBR0xDLE1BQUFBLEtBQUssRUFBRSxFQUhGO0FBSUxDLE1BQUFBLFFBQVEsRUFBRTtBQUpMO0FBSFQsS0FVSVgsWUFBRCxJQUFtQixnQ0FBQyxPQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVBO0FBQWxCLElBVnRCLEVBV0lELFNBQUQsSUFBZ0IsZ0NBQUMsT0FBRDtBQUFTLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTVEsTUFBTSxDQUFDSyxJQUFQLENBQVliLFNBQVosQ0FBTjtBQUFBO0FBQWxCLElBWG5CLENBREYsQ0FERixDQURGO0FBbUJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuLi9Vc2VDb250ZXh0JztcbmltcG9ydCB1c2VBcHBDb250ZXh0IGZyb20gJy4uLy4uL2FwcC9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIHJvdXRlUGF0aCwgY3VzdG9tQWN0aW9uIH0pID0+IHtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUFwcENvbnRleHQoKTtcbiAgY29uc3QgeyBHcmlkLCBUb29sdGlwLCBGYWIsIEFkZEljb24gfSA9IHVzZVVpQ29udGV4dCgpO1xuXG4gIGNvbnN0IHsgdXNlUm91dGVyIH0gPSBhcHBDb250ZXh0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYgKHJvdXRlUGF0aCAmJiBjdXN0b21BY3Rpb24pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezF9PlxuICAgICAgPFRvb2x0aXAgdGl0bGU9e3RpdGxlfSBhcmlhLWxhYmVsPVwiYWRkXCIgcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICA8RmFiXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6IDEyOTksXG4gICAgICAgICAgICB0b3A6IDMwLFxuICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoY3VzdG9tQWN0aW9uKSAmJiAoPEFkZEljb24gb25DbGljaz17Y3VzdG9tQWN0aW9ufSAvPil9XG4gICAgICAgICAgeyhyb3V0ZVBhdGgpICYmICg8QWRkSWNvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChyb3V0ZVBhdGgpfSAvPil9XG4gICAgICAgIDwvRmFiPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG4iXX0=