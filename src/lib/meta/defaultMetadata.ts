import { Metadata } from 'next';
import baseUrl from '../common/baseUrl';

const description =
  'Learnly is the #1 personalized lesson & curriculum software for homeschooling families.';

const defaultMetadata: Metadata = {
  title: {
    default: 'Homeschool Made Easy',
    template: '%s | Learnly | Homeschool Made Easy',
  },
  description,
  generator: 'Next.js',
  applicationName: 'Leanrly',
  referrer: 'origin-when-cross-origin',
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
  authors: [{ name: 'Learnly', url: 'https://www.learnly.ai' }],
  creator: 'Learnly',
  publisher: 'Learnly',
  colorScheme: 'light dark',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
    date: true,
    url: true,
  },
  metadataBase: new URL(baseUrl),
  //   assets:
  // bookmarks
  // category
  // classification
  // icons
  // manifest
  // openGraph
  // other
  // robots
  // themeColor
  // twitter
  // verification
  // viewport
};

export default defaultMetadata;
