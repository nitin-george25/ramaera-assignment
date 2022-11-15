import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const translationsEn = {
    register: 'Register Individual Account!',
    'register-info': 'For the purpose of industry regulation, your details are required.',
    button: 'Sign up',
};

const translationsHi = {
    register: 'व्यक्तिगत खाता पंजीकृत करें!',
    'register-info': 'उद्योग विनियमन के प्रयोजन के लिए, आपके विवरण आवश्यक हैं।',
    button: 'साइन अप',
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationsEn },
            hi: { translation: translationsHi },
        },
        fallbackLng: 'en',
        debug: true,
    });

export default i18n;