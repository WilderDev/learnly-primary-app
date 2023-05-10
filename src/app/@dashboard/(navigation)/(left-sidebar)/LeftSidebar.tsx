import Logo from '@/lib/components/brand/Logo';
import LeftSidebarNavLinks from './LeftSidebarNavLinks';
import LeftSidebarUserLinks from './LeftSidebarUserLinks';

export default function LeftSidebar() {
  return (
    <nav
      className="fixed left-0 top-0 z-40 hidden h-full w-20 sm:block shadow dark:shadow-navy-800"
      aria-label="Main Navigation"
    >
      <div className="flex h-full w-full flex-col items-center border-r border-slate-100 bg-white dark:border-navy-700 dark:bg-navy-800">
        {/* Logo */}
        <Logo className="mt-4" />

        {/* Main Links */}
        <LeftSidebarNavLinks />

        {/* Bottom Links */}
        <LeftSidebarUserLinks />
      </div>
    </nav>
  );
}
