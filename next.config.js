/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_base_url: process.env.NEXT_PUBLIC_API_URL,
    api_key: process.env.API_KEY
  }
};

module.exports = nextConfig;
