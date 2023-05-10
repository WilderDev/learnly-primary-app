import dynamic from 'next/dynamic';

const ThemeTogglerButton = dynamic(() => import('@/lib/theme/ThemeTogglerBtn'));

export default function TopHeaderItems() {
  return (
    <ul className="flex items-center space-x-4">
      {/* Theme Toggler */}
      <li>
        <ThemeTogglerButton />
      </li>

      {/* Monochrome toggler */}
      <li>
        {/* <MonochromeToggler /> */}
        {/* TSK */}
      </li>

      {/* Notificiations */}
      <li className="relative">
        {/* <NotificationsPopover /> */}
        {/* TSK */}
      </li>

      {/* Quick Report Menu Toggler */}
      <li>
        {/* <RightSidebarToggler /> */}
        {/* TSK */}
      </li>
    </ul>
  );
}
