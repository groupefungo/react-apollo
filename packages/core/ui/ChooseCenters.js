"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChooseCenters = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _hooks = require("../centers/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChooseCenters = function ChooseCenters(_ref) {
  var className = _ref.className,
      centerIds = _ref.centerIds,
      setCentersState = _ref.setCentersState;

  var _useUiContext = (0, _UseContext["default"])(),
      FormControl = _useUiContext.FormControl,
      FormLabel = _useUiContext.FormLabel,
      FormGroup = _useUiContext.FormGroup,
      FormControlLabel = _useUiContext.FormControlLabel,
      Checkbox = _useUiContext.Checkbox,
      FormHelperText = _useUiContext.FormHelperText;

  var uCenters = (0, _hooks.useCenters)();
  if (!uCenters) return null;

  var centersChanged = function centersChanged() {
    var checkboxes = document.querySelectorAll('input[name=centers]');
    var checkboxIds = [];
    Array.prototype.forEach.call(checkboxes, function (checkbox) {
      if (checkbox.checked) {
        checkboxIds.push(parseInt(checkbox.value, 10));
      }
    });
    setCentersState(checkboxIds);
  };

  var centers = uCenters.centers;

  var centerSelected = function centerSelected(cid) {
    var found = centerIds.find(function (stateCenterId) {
      return "".concat(stateCenterId) === "".concat(cid);
    });
    return !!found;
  };

  return _react["default"].createElement(FormControl, {
    component: "fieldset",
    className: className
  }, _react["default"].createElement(FormLabel, {
    component: "legend"
  }, "S\xE9lectionner le(s) centre(s)"), _react["default"].createElement(FormGroup, null, centers.map(function (center) {
    var id = center.id,
        name = center.name;
    var checked = centerSelected(id);
    return _react["default"].createElement(FormControlLabel, {
      key: "center-".concat(id),
      control: _react["default"].createElement(Checkbox, {
        key: "center".concat(id),
        id: "center".concat(id),
        name: "centers",
        checked: checked,
        onChange: centersChanged,
        value: id
      }),
      label: name
    });
  })), _react["default"].createElement(FormHelperText, null, "(s\xE9lectionnez au moins un)"));
};

exports.ChooseCenters = ChooseCenters;