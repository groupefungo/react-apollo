"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _StyledRadio = _interopRequireDefault(require("../StyledRadio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var filters = props.filters,
      _onClick = props.onClick,
      selectedValue = props.selectedValue,
      label = props.label;

  var _useUiContext = (0, _UseContext["default"])(),
      FormControlLabel = _useUiContext.FormControlLabel,
      GroupWorkIcon = _useUiContext.GroupWorkIcon;

  return filters.map(function (filter) {
    var id = filter.id,
        title = filter.title,
        name = filter.name,
        logo = filter.logo;
    if (!label && !title && !name) return null;

    var checkedIcon = _react["default"].createElement(GroupWorkIcon, {
      color: "primary",
      fontSize: "inherit"
    });

    var icon = _react["default"].createElement(GroupWorkIcon, {
      fontSize: "inherit",
      color: "disabled"
    });

    var _ref = logo || {},
        url = _ref.url;

    if (url) {
      checkedIcon = _react["default"].createElement("img", {
        src: url,
        height: 50,
        width: 50
      });
      icon = _react["default"].createElement("img", {
        src: url,
        height: 50,
        width: 50,
        style: {
          opacity: '50%'
        }
      });
    }

    return _react["default"].createElement(FormControlLabel, {
      key: id,
      value: id,
      onClick: function onClick() {
        return _onClick(id);
      },
      control: _react["default"].createElement(_StyledRadio["default"], {
        checked: id === selectedValue,
        checkedIcon: checkedIcon,
        icon: icon
      }),
      label: label && label(filter) || title || name,
      labelPlacement: "bottom"
    });
  });
};

exports["default"] = _default;