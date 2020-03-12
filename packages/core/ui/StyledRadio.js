"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

require("./cardStyles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var icon = props.icon,
      checkedIcon = props.checkedIcon;

  var _useUiContext = (0, _UseContext["default"])(),
      Radio = _useUiContext.Radio;

  return _react["default"].createElement(Radio, _extends({
    className: "filterItem",
    disableRipple: true,
    color: "default",
    checkedIcon: checkedIcon,
    icon: icon
  }, props));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9TdHlsZWRSYWRpby50c3giXSwibmFtZXMiOlsicHJvcHMiLCJpY29uIiwiY2hlY2tlZEljb24iLCJSYWRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7ZUFFZSxrQkFBQ0EsS0FBRCxFQUFXO0FBQUEsTUFDaEJDLElBRGdCLEdBQ01ELEtBRE4sQ0FDaEJDLElBRGdCO0FBQUEsTUFDVkMsV0FEVSxHQUNNRixLQUROLENBQ1ZFLFdBRFU7O0FBQUEsc0JBRU4sNkJBRk07QUFBQSxNQUVoQkMsS0FGZ0IsaUJBRWhCQSxLQUZnQjs7QUFJeEIsU0FDRSxnQ0FBQyxLQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsWUFEWjtBQUVFLElBQUEsYUFBYSxNQUZmO0FBR0UsSUFBQSxLQUFLLEVBQUMsU0FIUjtBQUlFLElBQUEsV0FBVyxFQUFFRCxXQUpmO0FBS0UsSUFBQSxJQUFJLEVBQUVEO0FBTFIsS0FNTUQsS0FOTixFQURGO0FBVUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVWlDb250ZXh0IGZyb20gJy4vVXNlQ29udGV4dCc7XG5pbXBvcnQgJy4vY2FyZFN0eWxlcy5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpY29uLCBjaGVja2VkSWNvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgUmFkaW8gfSA9IHVzZVVpQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvXG4gICAgICBjbGFzc05hbWU9XCJmaWx0ZXJJdGVtXCJcbiAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICBjaGVja2VkSWNvbj17Y2hlY2tlZEljb259XG4gICAgICBpY29uPXtpY29ufVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuIl19