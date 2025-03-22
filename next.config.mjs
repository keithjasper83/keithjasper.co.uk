/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: process.env.NODE_ENV === "production",
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
  // Removed 'optimization' key that was causing issues
};

export default nextConfig;
