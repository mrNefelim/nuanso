/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/nuanso',
  assetPrefix: '/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 