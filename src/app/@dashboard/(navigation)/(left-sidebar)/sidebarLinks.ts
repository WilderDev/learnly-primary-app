import { ILink } from '@/assets/typescript/ui';
import {
  BookmarkSquareIcon,
  CalendarIcon,
  //   ChartBarSquareIcon,
  HomeIcon,
  LifebuoyIcon,
  MapIcon,
  //   PaperClipIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/solid';

export const sidebarLinks: ILink[] = [
  {
    id: 1,
    name: 'Dashboard',
    slug: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    name: 'Curriculum Roadmaps',
    slug: '/curriculum-roadmaps',
    icon: MapIcon,
  },
  {
    id: 3,
    name: 'Lesson Creator',
    slug: '/lesson-creator',
    icon: BookmarkSquareIcon,
  },
  {
    id: 4,
    name: 'Schedule Builder',
    slug: '/schedule-builder',
    icon: CalendarIcon,
  },
  // {
  //   id: 5,
  //   name: "Progress Reports",
  //   slug: "/parent/progress-reports",
  //   icon: ChartBarSquareIcon
  // },
  // {
  //   id: 5,
  //   name: 'Bonus Resources',
  //   slug: '/parent/bonus-resources',
  //   icon: PaperClipIcon
  // },
  {
    id: 5,
    name: 'Community',
    slug: 'https://www.facebook.com/groups/effortlesshomeschool/',
    icon: RectangleGroupIcon,
    external: true,
  },
  {
    id: 6,
    name: 'Help Center',
    slug: '/help-center',
    icon: LifebuoyIcon,
  },
];
