import type { NextConfig } from "next";
import "dotenv/config";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.AWS_S3_CONFIG || "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
