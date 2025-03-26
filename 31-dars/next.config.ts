import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "13.233.2.40",
                port: "3133",
                pathname: "/uploads/products/**",
            },
        ],
    },
};

export default nextConfig;
