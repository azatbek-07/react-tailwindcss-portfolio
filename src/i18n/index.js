import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import uz from "./uz.json";
import ru from "./ru.json";
import qar from "./qar.json";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,

        lng: "uz",            // ✅ default tilni majburan uz qilamiz
        fallbackLng: "uz",

        detection: {
            order: ["localStorage"], // ❗ browser (navigator) ni olib tashlaymiz
            caches: ["localStorage"]
        },

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: { translation: en },
            uz: { translation: uz },
            ru: { translation: ru },
            qar: { translation: qar },
        },
    });

export default i18n;