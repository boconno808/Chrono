const manageTranslations = require('react-intl-translations-manager').default;
manageTranslations({
  messagesDirectory: 'translations',
  translationsDirectory: 'src/locales',
  languages: ['en', 'es', 'fr', 'ja', 'zh'],
  singleMessagesFile: true,
});
