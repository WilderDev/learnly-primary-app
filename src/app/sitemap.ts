import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // TSK: Get all curriculum roadmap paths

  return [
    {
      url: '/',
      lastModified: new Date(),
    },
    {
      url: '/onboarding',
      lastModified: new Date(),
    },

    // . . .
  ];
}

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
