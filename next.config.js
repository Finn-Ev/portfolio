/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "spoonacular.com"],
  },
  experimental: {
    appDir: true,
  }
}
