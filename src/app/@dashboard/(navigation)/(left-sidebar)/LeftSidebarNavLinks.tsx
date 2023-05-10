'use client';

import LeftSidebarLink from './LeftSidebarLink';
import { sidebarLinks } from './sidebarLinks';

export default function LeftSidebarNavLinks() {
  // * Render
  return (
    <ul className="mt-6 flex grow flex-col space-y-4 overflow-y-auto">
      {sidebarLinks.map((link, i) => (
        <LeftSidebarLink link={link} idx={i} key={link.id} />
      ))}
    </ul>
  );
}
