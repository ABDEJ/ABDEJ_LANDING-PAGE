/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: ["http://localhost:3001",
    "10.23.180.78"
  ],
  async headers(){
    return [
      {
        source: "/:path*.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff|tif|jfif|pjpeg|pjp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
            },
        ],
      }
    ]
  }
};

module.exports = nextConfig;
