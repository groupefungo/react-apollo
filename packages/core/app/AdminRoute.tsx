"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Error = _interopRequireDefault(require("../ui/Error"));

var _hasRole = _interopRequireDefault(require("./hasRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var Component = _ref.component,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["component", "children"]);

  var _useAppContext = (0, _UseContext["default"])(),
      Route = _useAppContext.Route;

  var admin = (0, _hasRole["default"])('admin');
  return _react["default"].createElement(Route, _extends({}, rest, {
    render: function render(props) {
      return admin ? _react["default"].createElement(Component, _extends({}, props, rest)) : _react["default"].createElement(_Error["default"], {
        msg: "Vous n'avez pas le droit."
      });
    }
  }));
};

exports["default"] = _default;