/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
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
