import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // "use cache"
    dynamicIO: true,
  }
};

export default nextConfig;
