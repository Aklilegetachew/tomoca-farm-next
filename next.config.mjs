/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Rule for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  
  output: "export",
  trailingSlash: true,
};

export default nextConfig;