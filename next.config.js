/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/graphql/:path*",
        destination: "http://localhost:4502/graphql/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
