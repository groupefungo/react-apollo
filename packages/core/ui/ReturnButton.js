"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _UseContext2 = _interopRequireDefault(require("../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var back = _ref.back;

  var _useAppContext = (0, _UseContext2["default"])(),
      useRouter = _useAppContext.useRouter,
      UseBack = _useAppContext.UseBack,
      useTranslate = _useAppContext.useTranslate;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

  var router = useRouter();

  var _useUiContext = (0, _UseContext["default"])(),
      Button = _useUiContext.Button;

  var myBack = function myBack() {
    if (back) return back;
    return function () {
      var push = router.push;
      var backState = UseBack.backState;
      var bs = backState();
      console.log('return button state', bs);
      push(bs);
    };
  };

  return _react["default"].createElement(Button, {
    type: "button",
    variant: "contained",
    color: "secondary",
    onClick: myBack()
  }, t('back'));
};

exports["default"] = _default;