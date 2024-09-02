import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishTranslation from "./locales/en.json";
import RussianTranslation from "./locales/ru.json";
import ArmenianTranslation from "./locales/am.json";

i18n.use(initReactI18next).init({
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  resources: {
    en: {
      translation: EnglishTranslation,
    },
    ru: {
      translation: RussianTranslation,
    },
    am: {
      translation: ArmenianTranslation,
    },
  },
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
