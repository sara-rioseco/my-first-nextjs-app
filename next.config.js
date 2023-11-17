/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thenounproject.com",
      },
      {
        protocol: "http",
        hostname: "*.mangahere.com",
      },
      {
        protocol: "https",
        hostname: "img.mreadercdn.com",
      },

    ],
  },
};

module.exports = nextConfig
