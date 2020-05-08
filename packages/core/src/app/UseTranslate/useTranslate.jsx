import {useTranslation} from 'react-i18next';
import React from "react";

export const useTranslate = () => {
  const {t, i18n} = useTranslation();

  return {
    t,
    i18n,
  }
};
