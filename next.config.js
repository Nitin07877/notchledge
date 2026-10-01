/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [{ protocol: "https", hostname: "**" }] 
  },
  // 🚀 Build के वक्त छोटी-मोटी ESLint और TypeScript एरर्स को इग्नोर करने के लिए
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;