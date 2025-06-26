/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.drivewayblaster.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/robots.txt', '/sitemap.xml', '/opengraph-image.png'],
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;