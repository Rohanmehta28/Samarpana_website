/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/announcements': { page: '/announcements' },
      '/events': { page: '/events' },
      '/events/ev/samarpana-run': { page: '/events/ev/samarpana-run' },
      '/events/ev/workshops-and-legal-aids': {
        page: '/events/ev/workshops-and-legal-aids',
      },
      '/events/ev/bakesale': { page: '/events/ev/bakesale' },
      '/events/ev/testimonials': { page: '/events/ev/testimonials' },
      '/events/ev/army-vs-pesu-sports': {
        page: '/events/ev/army-vs-pesu-sports',
      },
      '/events/ev/cultural-evenings': { page: '/events/ev/cultural-evenings' },
      '/events/ev/samarpana-talks': { page: '/events/ev/samarpana-talks' },
      '/samarpana-20': { page: '/samarpana-20' },
      '/registrations': { page: '/registrations' },
      '/registrations/offline': { page: '/registrations/offline' },
    }
  },
}

module.exports = nextConfig
