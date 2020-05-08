"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslate = void 0;

var _reactI18next = require("react-i18next");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTranslate = function useTranslate() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  return {
    t: t,
    i18n: i18n
  };
};

exports.useTranslate = useTranslate;