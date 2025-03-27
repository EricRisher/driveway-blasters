import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.drivewayblaster.com';

  const routes = [
    '/',
    '/about-us',
    '/house-and-roof-care',
    '/locations',
    '/gutter-cleaning',
    '/contact',
    '/windows-solar-panels',
    '/driveway-deck-revival',
  ];

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return sitemapEntries;
}
