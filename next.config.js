/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/aboutUs": { page: "/aboutUs" },
      "/products/proHM": { page: "/products/[product]" },
      "/products/logiSmart": { page: "/products/[product]" },
      "/products/smartQC": { page: "/products/[product]" },
      "/aiAsServices/retail": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/manufacture": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/healthCare": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/engineering": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/oil": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/travel": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/consumer": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/telecommunication": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/banking": { page: "/aiAsServices/[aiAsService]" },
      "/aiAsServices/food": { page: "/aiAsServices/[aiAsService]" },
    };
  },
};

module.exports = nextConfig;
