/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'www.pngitem.com'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /^((?!inline).)*\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
