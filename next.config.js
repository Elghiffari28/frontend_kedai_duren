/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: "placehold.co",
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
