/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/',
  assetPrefix: '/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 