/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/BlindSpot',
  assetPrefix: '/BlindSpot/',
};

export default nextConfig; 