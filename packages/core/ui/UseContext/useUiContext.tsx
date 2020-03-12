"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUiContext = void 0;

var _react = require("react");

var _Context = _interopRequireDefault(require("../Context/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useUiContext = function useUiContext() {
  return (0, _react.useContext)(_Context["default"]);
};

exports.useUiContext = useUiContext;