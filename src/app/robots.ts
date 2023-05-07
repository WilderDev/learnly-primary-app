import { MetadataRoute } from 'next';
import baseUrl from '../lib/common/baseUrl';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api'],
    },
    sitemap: baseUrl + '/sitemap.xml',
    host: baseUrl,
  };
}
