import MonochromeTogglerBtn from '@/lib/theme/MonochromeTogglerBtn';
import dynamic from 'next/dynamic';
import TopHeaderNotifications from './TopHeaderNotifications';
import RightSidebarToggler from '../(right-sidebar)/RightSidebarToggler';

const ThemeTogglerButton = dynamic(() => import('@/lib/theme/ThemeTogglerBtn'));

export default async function TopHeaderItems() {
  // * Data
  const notifications = await getNotifications();

  // * Render
  return (
    <ul className="flex items-center space-x-4">
      {/* Theme Toggler */}
      <li>
        <ThemeTogglerButton />
      </li>

      {/* Monochrome toggler */}
      <li>
        <MonochromeTogglerBtn />
      </li>

      {/* Notificiations */}
      <li className="relative">
        <TopHeaderNotifications notifications={notifications} />
      </li>

      {/* Quick Report Menu Toggler */}
      <li>
        <RightSidebarToggler />
      </li>
    </ul>
  );
}

// * Fetcher
async function getNotifications() {
  return [];
}
