const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  //workaround until next-i18next support public/path
  localePath: typeof window === undefined ? "public/locales" : "locales",
  // good to know next-i18next support localeSubPath: it enables myApp.com/de, myApp.com/fr, etc
});