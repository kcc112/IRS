import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import defaultEN from './locales/en/default.en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: defaultEN,
    }
  },
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;