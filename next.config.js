/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment these for GitHub Pages deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/gfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/gfolio/' : '',
}

module.exports = nextConfig
