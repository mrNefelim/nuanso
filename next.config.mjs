/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nuanso',
  assetPrefix: '/nuanso/',
};

export default nextConfig; 