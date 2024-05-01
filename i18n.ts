import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ka"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? 
          import('./messages/en.json')
        : import(`./messages/${locale}.json`))
    ).default
  };
});
