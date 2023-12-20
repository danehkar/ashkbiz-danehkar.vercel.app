import { MetadataRoute } from 'next';
import { vercelURL } from 'src/helpers/env';

/** const baseURL = `https://${vercelURL}`; */
const baseURL = `https://ashkbiz-danehkar.vercel.app/`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
