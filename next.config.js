/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Railway/Production optimizations
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  // API route configuration for longer timeouts (Railway default is 10s)
  // Webhooks and AI processing need more time
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
    responseLimit: false,
    externalResolver: true,
  },

  // Increase serverComponentsExternalPackages for better compatibility
  serverComponentsExternalPackages: [
    '@prisma/client',
    'bcryptjs',
    'nodemailer',
  ],

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
}

module.exports = nextConfig
