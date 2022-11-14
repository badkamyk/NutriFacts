/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "spoonacular.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
