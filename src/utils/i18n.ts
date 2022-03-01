import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { supportedLanguages } from '../domains/constants';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'localStorage'],
      caches: ['localStorage'],
    },
    supportedLngs: Object.keys(supportedLanguages),
  });

export default i18n;
