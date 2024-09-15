import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
