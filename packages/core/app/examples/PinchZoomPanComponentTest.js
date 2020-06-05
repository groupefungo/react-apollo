"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _img_forest = _interopRequireDefault(require("./images/img_forest.jpg"));

var _PinchZoomPan = _interopRequireDefault(require("react-responsive-pinch-zoom-pan/src/PinchZoomPan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PinchZoomPanComponentTest() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_PinchZoomPan["default"], null, _react["default"].createElement("img", {
    src: _img_forest["default"],
    alt: "image"
  })));
}

var _default = PinchZoomPanComponentTest;
exports["default"] = _default;