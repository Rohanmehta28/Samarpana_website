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
      '/events/ev/samarpana-run': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'samarpana-run' },
      },
      '/events/ev/workshops-and-legal-aids': {
        page: '/events/ev/[eventId]',
        params: {
          eventId: 'workshops-and-legal-aids',
        },
      },
      '/events/ev/bakesale': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'bakesale' },
      },
      '/events/ev/testimonials': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'testimonials' },
      },
      '/events/ev/army-vs-pesu-sports': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'army-vs-pesu-sports' },
      },
      '/events/ev/cultural-evenings': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'cultural-evenings' },
      },
      '/events/ev/samarpana-talks': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'samarpana-talks' },
      },
      '/events/ev/felicitation': {
        page: '/events/ev/[eventId]',
        params: { eventId: 'felicitation' },
      },
      '/samarpana-19': { page: '/samarpana-19' },
      '/registrations': { page: '/registrations' },
      '/registrations/offline': { page: '/registrations/offline' },
    }
  },
}

module.exports = nextConfig
