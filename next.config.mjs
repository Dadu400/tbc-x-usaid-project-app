/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
};

const imageConfig = {
  images: {
    domains: ['www.lego.com'],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...nextConfig,
  ...imageConfig,
};
