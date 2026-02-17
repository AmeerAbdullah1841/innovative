import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Removed to support API routes and dynamic rendering
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omo-oss-image.thefastimg.com',
        port: '',
        pathname: '/portal-saas/**',
      },
    ],
  },
};

export default nextConfig;
