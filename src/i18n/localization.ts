import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

const resources: Resource = {
  en: { translation: translations['en-GB'] },
  no: { translation: translations['nb-NO'] },
};

// more information here: https://www.i18next.com/
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    resources,
    lng: 'no',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
