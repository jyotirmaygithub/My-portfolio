/** @type {import('next').NextConfig} */
const nextConfig = {
    // to make the url work in the nextjs in the image component of it we need to write these below thigns 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
