/** @type {import('next').NextConfig} */

// next.config.js

// next.config.mjs
const nextConfig = {
  compress: process.env.NODE_ENV === "production",
  optimization: {
    minimize: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
