/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["agrawalstones.s3.eu-north-1.amazonaws.com", "agrawalstones.s3.eu-north-1.amazonaws.comhttps", "utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agrawalstones.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
