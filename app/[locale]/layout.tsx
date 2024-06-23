import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SuperWeb',
  description: 'Discover a world of fun and imagination with SuperWeb',
  metadataBase: new URL('https://https://tbc-x-usaid-project-app.vercel.app'),
};

const locales = ['en', 'ka'];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} >
      <body>
        <NextIntlClientProvider
          locale={locale}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic"
