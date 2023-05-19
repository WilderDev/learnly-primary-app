'use client';

import { sidebarLinks } from '../sidebarLinks';
import LeftSidebarMobileLink from './LeftSidebarMobileLink';

interface IProps {
  close: () => void;
}

export default function LeftSidebarMobileLinks({ close }: IProps) {
  // * Render
  return (
    <ul className="mt-6 flex grow flex-col space-y-4 overflow-y-auto">
      {sidebarLinks?.map((link, i) => (
        <LeftSidebarMobileLink
          link={link}
          idx={i}
          close={close}
          key={link.id}
        />
      ))}
    </ul>
  );
}
