import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/booyaa-fishing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
