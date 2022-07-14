const ESLintPlugin = require('eslint-webpack-plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, env) => {
    const { dev } = env;
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ['js', 'tsx', 'ts', 'jsx'],
          files: ['pages', 'src'],
          failOnError: false,
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
