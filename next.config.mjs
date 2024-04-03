/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
};

const imageConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.lego.com',
      }
    ],
  },
};

export default {
  ...nextConfig,
  ...imageConfig,
};
