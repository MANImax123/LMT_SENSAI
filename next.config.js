import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me"], // 👈 allow external image domain
  },
};

export default nextConfig;
