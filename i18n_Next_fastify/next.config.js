const env = require('./config/env');
const publicConfig = require('./config/public.runtime');
const serverConfig = require('./config/server.runtime');

const nextConfig = {
  webpack: (config, options) => {
    // fixes npm packages that depend on fs module :
    config.node = {
      fs: "empty"
    };
    return config;
  },
  compress: false
};

module.exports = () => {
  // see https://github.com/zeit/next.js#build-time-configuration
  nextConfig.env = env;
  // see https://github.com/zeit/next.js#runtime-configuration
  nextConfig.publicConfig = publicConfig;
  nextConfig.serverConfig = serverConfig;

  const withCSS = require('@zeit/next-css');
  return withCSS(nextConfig);
}