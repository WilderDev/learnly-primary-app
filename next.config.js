/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    // optimizeCss: true,
  },
  images: {
    domains: ['source.unsplash.com'],
  },
};

module.exports = nextConfig;
