import { Metadata } from 'next';
import baseUrl from '../common/baseUrl';

const description =
  'Learnly is the #1 personalized lesson & curriculum software for homeschooling families.';
const images = [
  {
    url: '/static/images/landing-og.png',
    width: 1200,
    height: 630,
    alt: 'Learnly Homeschooling Software',
  },
  {
    url: '/static/images/app-og-default.png',
    width: 1200,
    height: 630,
    alt: 'Learnly Homeschooling Software',
  },
  {
    url: '/static/images/app-og-alt.png',
    width: 1200,
    height: 630,
    alt: 'Learnly Homeschooling Software (Dark Mode)',
  },
  // Take screenshots of new app and save in static/images
];

const defaultMetadata: Metadata = {
  title: {
    default: 'Homeschool Made Easy',
    template: '%s | Learnly | Homeschool Made Easy',
  },
  description,
  generator: 'Next.js',
  applicationName: 'Learnly',
  creator: 'Learnly',
  publisher: 'Learnly',
  colorScheme: 'light dark',
  assets: baseUrl + '/static',
  referrer: 'origin-when-cross-origin',
  manifest: baseUrl + '/static/manifest.json',
  authors: [{ name: 'Learnly', url: 'https://www.learnly.ai' }],
  metadataBase: new URL(baseUrl),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#192132' },
  ],
  keywords: [
    'Learnly',
    'Homeschool',
    'Homeschool Software',
    'Homeschool App',
    'Homeschooling Tools',
    'Learnly Homeschool',
    'Learnly Homeschooling',
    'Learnly Homeschooling Software',
    'Learnly Homeschooling App',
    'Learnly Homeschooling Curriculum',
    'Learnly Homeschool Lessons',
    'Homeschooling Curriculum Software',
    'Homeschooling Curriculum App',
    'Homeschooling Curriculum Software App',
    'Lesson Plan Software',
    'Lesson Plan App',
    'Lesson Plan Creator',
    'Lesson Plan Software',
    'Lesson Plan App',
    'Lesson Plan Creator',
    'Homeschooling Lesson Plan Software',
    'Homeschooling Lesson Plan App',
  ],
  bookmarks: [
    baseUrl,
    baseUrl + '/lesson-plans',
    baseUrl + '/curriculum-roadmaps',
  ],
  robots: {
    follow: true,
    index: true,
    nocache: false,
    noimageindex: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: [
      { url: '/static/icons/brand/favicon_512x512.png' },
      new URL('/static/icons/brand/favicon_512x512.png', baseUrl),
    ],
    // shortcut: '',
    apple: [
      {
        url: '/static/icons/brand/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    // other: [],
  },
  openGraph: {
    siteName: 'Learnly',
    title: 'Homeschool Made Easy | Learnly',
    description,
    type: 'website',
    url: baseUrl,
    locale: 'en_US',
    countryName: 'United States',
    emails: ['support@learnly.ai', 'will@learnly.ai'],
    ttl: 60 * 60 * 24 * 7,
    images,
    // videos: [],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
    date: true,
    url: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homeschool Made Easy | Learnly',
    description,
    site: '@LearnlyAi',
    creator: '@LearnlyAi',
    images,
  },
  // verification: {}
};

export default defaultMetadata;
