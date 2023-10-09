import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '@/locales/en/home.json';
import HOME_VI from '@/locales/vi/home.json';
import HEADER_EN from '@/locales/en/header.json';
import HEADER_VI from '@/locales/vi/header.json';
import DETAIL_EN from '@/locales/en/productDetail.json';
import DETAIL_VI from '@/locales/vi/productDetail.json';
import AUTH_EN from '@/locales/en/auth.json';
import AUTH_VI from '@/locales/vi/auth.json';
import CART_EN from '@/locales/en/cart.json';
import CART_VI from '@/locales/vi/cart.json';
import CHECKOUT_EN from '@/locales/en/checkout.json';
import CHECKOUT_VI from '@/locales/vi/checkout.json';
import PROFILE_EN from '@/locales/en/profile.json';
import PROFILE_VI from '@/locales/vi/profile.json';
import FOOTER_EN from '@/locales/en/footer.json';
import FOOTER_VI from '@/locales/vi/footer.json';

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt',
};

export const resources = {
    en: {
        home: HOME_EN,
        header: HEADER_EN,
        detail: DETAIL_EN,
        auth: AUTH_EN,
        cart: CART_EN,
        checkout: CHECKOUT_EN,
        profile: PROFILE_EN,
        footer: FOOTER_EN,
    },
    vi: {
        home: HOME_VI,
        header: HEADER_VI,
        detail: DETAIL_VI,
        auth: AUTH_VI,
        cart: CART_VI,
        checkout: CHECKOUT_VI,
        profile: PROFILE_VI,
        footer: FOOTER_VI,
    },
};

export const defaultNS = 'home';

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    ns: [
        'home',
        'header',
        'detail',
        'auth',
        'cart',
        'checkout',
        'profile',
        'footer',
    ],
    fallbackLng: 'en',
    defaultNS,
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});
