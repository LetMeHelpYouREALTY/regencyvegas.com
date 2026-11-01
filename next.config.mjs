/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize for modern browsers (reduces legacy JS polyfills)
  transpilePackages: [],
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "em.realscout.com",
      },
      {
        protocol: "https",
        hostname: "d1buiexcd5gara.cloudfront.net",
      },
    ],
    formats: ["image/avif", "image/webp"], // Prefer AVIF over WebP
    // Increase cache lifetime for optimized images (seconds)
    minimumCacheTTL: 2678400, // 31 days
    // Optimize image quality defaults
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Legacy listing routes from the pre-2026 Vite site -> current homes-for-sale page
      { source: "/allproperties", destination: "/homes-for-sale", permanent: true },
      { source: "/properties", destination: "/homes-for-sale", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
