import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';

const normalizeLanguage = (lng: string) => {
	const lowerLng = lng.toLowerCase();
	if (lowerLng.startsWith('ko')) return 'ko';
	if (lowerLng.startsWith('en')) return 'en';
	return 'en'; // 기본값
};

const resources = {
	en: {
		translation: en,
	},
	ko: {
		translation: ko,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
