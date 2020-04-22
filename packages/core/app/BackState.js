"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _UseContext = _interopRequireDefault(require("./UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var url = _ref.url;

  var _useAppContext = (0, _UseContext["default"])(),
      useRouter = _useAppContext.useRouter,
      UseBack = _useAppContext.UseBack;

  var setBackState = UseBack.setBackState;
  var router = useRouter();
  var baseUrl = router.match.url;
  (0, _react.useLayoutEffect)(function () {
    console.log('backstate component setting', url || baseUrl);
    setBackState(url || baseUrl);
  });
  return null;
};

exports["default"] = _default;