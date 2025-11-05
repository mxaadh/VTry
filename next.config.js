/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'img.drz.lazcdn.com', 'websitedemos.net'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

