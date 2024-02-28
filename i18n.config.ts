export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      _welcome: 'Welcome',
      _hello: 'Hello',
      _html: 'HTML Geolocation',
      _try: 'Try it!'
    },
    bn: {
      _welcome: 'স্বাগতম',
      _hello: 'হ্যালো',
      _html: 'HTML অবস্থান',
      _try: 'চেষ্টা করুন!'
    }
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'bn',
      iso: 'bn-BD',
      name: 'বাংলা'
    }
  ]
}))
