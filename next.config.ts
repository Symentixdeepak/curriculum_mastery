import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    unoptimized: true, // disables _next/image API
  },
};

export default nextConfig;
