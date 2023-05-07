import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
    },
    // . . .
  ];
}

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
