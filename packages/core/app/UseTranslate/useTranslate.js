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

  var currentLanguage = function currentLanguage() {
    var cl = i18n.language;

    switch (cl) {
      case 'en-US':
      case 'en':
        cl = 'en';
        break;

      default:
        cl = 'fr';
    }

    return cl;
  };

  var changeLanguage = function changeLanguage(lang) {
    return i18n.changeLanguage(lang);
  };

  return {
    t: t,
    currentLanguage: currentLanguage,
    changeLanguage: changeLanguage
  };
};

exports.useTranslate = useTranslate;