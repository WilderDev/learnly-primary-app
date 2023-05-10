'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import IconLink from '../IconLink';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LeftSidebarUserLinks() {
  const { user } = useUser();

  return (
    <motion.ul
      className="my-3 flex flex-col sm:items-center space-y-3"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      {/* Settings */}
      <li>
        <IconLink slug="/account">
          <Cog6ToothIcon className="h-7 w-7" />
        </IconLink>
      </li>

      {/* Profile */}
      <li>
        <Link
          className="group relative rounded-full focus:outline-green-500"
          //   href="/profile"
          href="/account"
        >
          {/* Profile Image */}
          <Image
            // TSK: getAvatarUrl(user?.avatarUrl!) if starts with . . .
            src={user?.avatarUrl! || '/static/icons/avatars/default.png'}
            alt={user?.firstName!}
            className="h-10 w-10 rounded-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-110"
            width={40}
            height={40}
          />

          {/* Online Bubble */}
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-navy-700" />
        </Link>
      </li>
    </motion.ul>
  );
}
