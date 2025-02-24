/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [`jsx`, `js`],
  webpack: (config) => {
    if (!config.resolve.modules) {
      config.resolve.modules = [];
    }
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
