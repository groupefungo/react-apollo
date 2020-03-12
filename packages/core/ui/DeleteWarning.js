"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var open = props.open,
      title = props.title,
      handleCancel = props.handleCancel,
      handleConfirm = props.handleConfirm;

  var _useUiContext = (0, _UseContext["default"])(),
      Dialog = _useUiContext.Dialog,
      Button = _useUiContext.Button;

  return _react["default"].createElement(Dialog, {
    open: open,
    onClose: handleCancel,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, _react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Effacer l'article ".concat(title, "?")), _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, "Cliquez sur le bouton supprimer pour confirmer votre d\xE9cision.")), _react["default"].createElement(_DialogActions["default"], null, _react["default"].createElement(Button, {
    onClick: handleCancel,
    color: "primary"
  }, "Annuler"), _react["default"].createElement(Button, {
    onClick: handleConfirm,
    color: "primary",
    autoFocus: true
  }, "Supprimer")));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9EZWxldGVXYXJuaW5nLnRzeCJdLCJuYW1lcyI6WyJwcm9wcyIsIm9wZW4iLCJ0aXRsZSIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUNvbmZpcm0iLCJEaWFsb2ciLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlLGtCQUFDQSxLQUFELEVBQVc7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDNkJELEtBRDdCLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLEtBRFUsR0FDNkJGLEtBRDdCLENBQ1ZFLEtBRFU7QUFBQSxNQUNIQyxZQURHLEdBQzZCSCxLQUQ3QixDQUNIRyxZQURHO0FBQUEsTUFDV0MsYUFEWCxHQUM2QkosS0FEN0IsQ0FDV0ksYUFEWDs7QUFBQSxzQkFFRyw2QkFGSDtBQUFBLE1BRWhCQyxNQUZnQixpQkFFaEJBLE1BRmdCO0FBQUEsTUFFUkMsTUFGUSxpQkFFUkEsTUFGUTs7QUFJeEIsU0FDRSxnQ0FBQyxNQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVMLElBRFI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsWUFGWDtBQUdFLHVCQUFnQixvQkFIbEI7QUFJRSx3QkFBaUI7QUFKbkIsS0FNRSxnQ0FBQyx1QkFBRDtBQUFhLElBQUEsRUFBRSxFQUFDO0FBQWhCLGlDQUEyREQsS0FBM0QsT0FORixFQU9FLGdDQUFDLHlCQUFELFFBQ0UsZ0NBQUMsNkJBQUQ7QUFBbUIsSUFBQSxFQUFFLEVBQUM7QUFBdEIseUVBREYsQ0FQRixFQVlFLGdDQUFDLHlCQUFELFFBQ0UsZ0NBQUMsTUFBRDtBQUFRLElBQUEsT0FBTyxFQUFFQyxZQUFqQjtBQUErQixJQUFBLEtBQUssRUFBQztBQUFyQyxlQURGLEVBSUUsZ0NBQUMsTUFBRDtBQUFRLElBQUEsT0FBTyxFQUFFQyxhQUFqQjtBQUFnQyxJQUFBLEtBQUssRUFBQyxTQUF0QztBQUFnRCxJQUFBLFNBQVM7QUFBekQsaUJBSkYsQ0FaRixDQURGO0FBdUJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuL1VzZUNvbnRleHQnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvcGVuLCB0aXRsZSwgaGFuZGxlQ2FuY2VsLCBoYW5kbGVDb25maXJtIH0gPSBwcm9wcztcbiAgY29uc3QgeyBEaWFsb2csIEJ1dHRvbiB9ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17aGFuZGxlQ2FuY2VsfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxuICAgID5cbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPntgRWZmYWNlciBsJ2FydGljbGUgJHt0aXRsZX0/YH08L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIENsaXF1ZXogc3VyIGxlIGJvdXRvbiBzdXBwcmltZXIgcG91ciBjb25maXJtZXIgdm90cmUgZMOpY2lzaW9uLlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FuY2VsfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICBBbm51bGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm19IGNvbG9yPVwicHJpbWFyeVwiIGF1dG9Gb2N1cz5cbiAgICAgICAgICBTdXBwcmltZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuIl19