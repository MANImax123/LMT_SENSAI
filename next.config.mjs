/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
    ],
  },
  // Add output configuration for better build handling
  output: 'standalone',
  // Ensure proper handling of not-found page
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
  