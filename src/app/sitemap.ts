import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.drivewayblasters.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/about-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/house-and-roof-care',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/locations',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/gutters',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/windows',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drivewayblasters.com/driveway-deck-revival',
      lastModified: new Date(),
    },
  ];
}
