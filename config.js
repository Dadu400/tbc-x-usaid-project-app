export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' ;
export const locales = ['en', 'ka'] ;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ka: '/pfadnamen'
  }
};

export const localePrefix = undefined;