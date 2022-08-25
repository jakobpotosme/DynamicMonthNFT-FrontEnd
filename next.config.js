/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "mdbcdn.b-cdn.net"],
  },
};

module.exports = nextConfig;
