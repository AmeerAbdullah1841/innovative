import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
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
