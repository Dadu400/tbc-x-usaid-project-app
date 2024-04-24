const { notFound } = require('next/navigation');
const { getRequestConfig } = require('next-intl/server');

const locales = ['en', 'ka'];

module.exports = getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await require(`./messages/${locale}.json`))
  };
});
