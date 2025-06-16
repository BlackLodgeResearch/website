/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/website',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
};

module.exports = nextConfig;