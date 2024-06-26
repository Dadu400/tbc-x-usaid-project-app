/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gwas7ga1a6kpusqm.public.blob.vercel-storage.com'],
  },
};

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  ...nextConfig,
});

