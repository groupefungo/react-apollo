import {useTranslation} from 'react-i18next';
import React from "react";

export const useTranslate = () => {
  const {t, i18n} = useTranslation();

  const currentLanguage = () => {
    let cl = i18n.language;
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

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return {
    t,
    currentLanguage,
    changeLanguage,
  }
};
