/** @type {import('next').NextConfig} */
const nextConfig = {
    
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
  
  const defaultExport = {
    ...nextConfig,
    ...imageConfig,
  };
  
  export default defaultExport;
  
