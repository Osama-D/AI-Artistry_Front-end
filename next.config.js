/** @type {import('next').NextConfig} */
const productionApiOrigin = "https://ai-artistry-backend.vercel.app";
const developmentApiOrigin = "http://127.0.0.1:5000";

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_ORIGIN:
      process.env.NODE_ENV === "development" ? "" : productionApiOrigin,
    API_SERVER_ORIGIN:
      process.env.NODE_ENV === "development"
        ? developmentApiOrigin
        : productionApiOrigin,
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "development") return [];

    return [
      {
        source: "/api/v1/:path*",
        destination: `${developmentApiOrigin}/api/v1/:path*`,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
