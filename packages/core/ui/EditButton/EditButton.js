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
      EditIcon = _useUiContext.EditIcon;

  var useRouter = appContext.useRouter;
  var router = useRouter();
  if (routePath && customAction) return null;

  var myOnClick = function myOnClick() {
    if (customAction) return customAction;
    return function () {
      return router.push(routePath);
    };
  };

  return /*#__PURE__*/_react["default"].createElement(Grid, {
    item: true,
    xs: 2,
    sm: 1
  }, /*#__PURE__*/_react["default"].createElement(Tooltip, {
    title: title,
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(Fab, {
    onClick: myOnClick(),
    color: "secondary",
    "aria-label": "add",
    style: {
      zIndex: 1299,
      top: 30,
      right: 30,
      position: 'fixed'
    }
  }, /*#__PURE__*/_react["default"].createElement(EditIcon, null))));
};

exports["default"] = _default;