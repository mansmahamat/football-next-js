/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-2.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-3.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
      },
    ],
    domains: ["media.api-sports.io"],
  },
};
