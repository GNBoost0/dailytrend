/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.dailytrend.fr',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.5;
    let changefreq = 'monthly';
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/ia/') || path.startsWith('/crypto/') || path.startsWith('/cyber/') || path.startsWith('/bien-etre/') || path.startsWith('/gaming/') || path.startsWith('/finance/')) { priority = 0.8; changefreq = 'weekly'; }
    else if (path.match(/^\/(ia|crypto|cyber|bien-etre|gaming|finance)$/)) { priority = 0.7; changefreq = 'daily'; }
    else if (path === '/a-propos' || path === '/contact' || path === '/mentions-legales' || path === '/politique-de-confidentialite') { priority = 0.4; changefreq = 'monthly'; }
    return { loc: path, changefreq, priority, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
  },
};
