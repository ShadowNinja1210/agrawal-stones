import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

export default withHydrationOverlay({
  appRootSelector: "main", // Adjust if you're using the app directory
})(nextConfig);
