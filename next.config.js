/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/blind_spot',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 