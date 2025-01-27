import {createI18n} from 'vue-i18n';
import ua from './locales/ua.json'
import en from './locales/en.json'

const messages = {
    ua,
    en,
};

const savedLocale = localStorage.getItem('lang') || 'ua';

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages,
});

export default i18n;
