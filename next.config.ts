import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    unoptimized: true, // disables _next/image API
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
