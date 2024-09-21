import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      "English": "English",
      "Arabic": "Arabic",
      "About me": "About me",
      "Contact me": "Contact me",
      "My Projects": "My Projects",
      "Light": "Light",
      "Dark": "Dark",
    }
  },
  ar: {
    translation: {
      "English": "الإنجليزية",
      "Arabic": "العربية",
      "About me": "عني",
      "Contact me": "تواصل",
      "My Projects": "مشاريعي",
      "Light": "مضيء",
      "Dark": "معتم",
    },
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'localeStorage'],
      caches: ['cookie']
    }
  });

  export default i18n;