"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var chipsData = _ref.chipsData,
      size = _ref.size,
      chipDeleted = _ref.chipDeleted,
      chipClicked = _ref.chipClicked;

  var _useUiContext = (0, _UseContext["default"])(),
      Chip = _useUiContext.Chip,
      GetAppIcon = _useUiContext.GetAppIcon,
      Grid = _useUiContext.Grid;

  return /*#__PURE__*/_react["default"].createElement(Grid, {
    container: true,
    spacing: 1
  }, chipsData.map(function (data) {
    return /*#__PURE__*/_react["default"].createElement(Chip, {
      icon: data.id && /*#__PURE__*/_react["default"].createElement(GetAppIcon, null),
      onClick: chipClicked(data),
      clickable: data.id && true,
      key: data.key || data.id,
      label: data.label || data.filename,
      onDelete: chipDeleted && chipDeleted(data)
    });
  }));
};

exports["default"] = _default;