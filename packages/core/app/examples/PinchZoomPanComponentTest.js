"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _img_forest = _interopRequireDefault(require("./images/img_forest.jpg"));

var _reactResponsivePinchZoomPan = _interopRequireDefault(require("@groupefungo/react-responsive-pinch-zoom-pan"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PinchZoomPanComponentTest() {
  var _useUiContext = (0, _UseContext["default"])(),
      Box = _useUiContext.Box;

  var imageHeight = 1000;
  var imageWidth = 1000;
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    style: {
      width: '100%',
      minHeight: 500,
      height: '60vh',
      overflow: 'hidden'
    }
  }, _react["default"].createElement(_reactResponsivePinchZoomPan["default"], {
    position: "center"
  }, _react["default"].createElement("div", {
    style: {
      width: 1000,
      height: 'auto'
    }
  }, _react["default"].createElement(Box, {
    style: {
      border: 'solid 1px',
      height: "".concat(imageHeight, "px"),
      width: "".concat(imageWidth, "px"),
      backgroundImage: "url(".concat(_img_forest["default"], ")"),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }, "Potato")))));
}

var _default = PinchZoomPanComponentTest;
exports["default"] = _default;