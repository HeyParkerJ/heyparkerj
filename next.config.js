/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["img.shields.io"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "img.shields.io",
    //   },
    // ],
  },
};

module.exports = nextConfig;
