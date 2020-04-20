import i18n from 'i18n-js';

import pt from './pt.json';
import en from './pt.json';

const translations = { pt, en };

i18n.locale = 'pt';
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;
