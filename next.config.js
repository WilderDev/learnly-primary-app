/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
};

module.exports = nextConfig;
