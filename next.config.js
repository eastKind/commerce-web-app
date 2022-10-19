/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    clientID: process.env.CLIENT_ID,
    secretKey: process.env.SECRET_KEY,
  },
};

module.exports = nextConfig;
