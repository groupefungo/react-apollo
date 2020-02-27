"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

require("./styles.scss");

var _StyledRadio = _interopRequireDefault(require("./StyledRadio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var filters = props.filters,
      _onClick = props.onClick,
      selectedValue = props.selectedValue;

  var _useUiContext = (0, _UseContext["default"])(),
      FormControlLabel = _useUiContext.FormControlLabel;

  return filters.map(function (filter) {
    var id = filter.id,
        title = filter.title,
        name = filter.name;
    if (!title && !name) return null;
    return _react["default"].createElement(FormControlLabel, {
      key: id,
      value: id,
      onClick: function onClick() {
        return _onClick(id);
      },
      control: _react["default"].createElement(_StyledRadio["default"], {
        checked: id === selectedValue
      }),
      label: title || name,
      labelPlacement: "bottom"
    });
  });
};

exports["default"] = _default;