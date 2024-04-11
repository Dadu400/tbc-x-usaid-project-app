/** @type {import('next').NextConfig} */
const nextConfig = {};

const imageConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

const defaultExport = {
  ...nextConfig,
  ...imageConfig,
};

export default defaultExport;
