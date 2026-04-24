/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://trend-pulse.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
