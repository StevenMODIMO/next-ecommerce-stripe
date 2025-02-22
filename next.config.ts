import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t0mrrn6uzcxdc7gp.public.blob.vercel-storage.com",
        port: "",
        pathname: "/quick-cart/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "t0mrrn6uzcxdc7gp.public.blob.vercel-storage.com",
        port: "",
        pathname: "/quick-cart-large/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

//https://t0mrrn6uzcxdc7gp.public.blob.vercel-storage.com/quick-cart-large/de77ea95-d0e4-4d42-91d3-eb2b79926c1d-AkAUt8kWcrWeR6TFjIpJKY77QQeUcn.png
