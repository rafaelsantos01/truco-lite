/** @type {import('next').NextConfig} */
const nextConfig = {};

import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  // Your Next.js config
});

export default {
  ...nextConfig,
  ...pwaConfig,
};
