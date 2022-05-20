/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // support svg
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { svgoConfig: { plugins: { removeViewBox: false } } } }],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
