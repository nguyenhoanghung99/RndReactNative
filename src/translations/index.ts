import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {},
      ),
    },
    ns: 'translations',
    lng: 'en',
    returnNull: false,
  });
export default i18n;
