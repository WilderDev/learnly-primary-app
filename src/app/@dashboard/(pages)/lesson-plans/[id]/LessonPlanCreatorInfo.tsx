import Image from 'next/image';

import { Database } from '@/assets/typescript/db';

interface IProps {
  avatar_url: string;
  name: string;
  role?: Database['public']['Enums']['profile_type'];
}

export default function LessonPlanCreatorInfo({ avatar_url, name }: IProps) {
  return (
    <div className="flex items-center">
      {/* Image */}
      <Image
        className="mask mask-squircle h-12 w-12 rounded-md object-cover object-center"
        // TSK: src={getAvatarUrl(avatar)}
        src={avatar_url}
        alt={name}
        width={48}
        height={48}
        priority={true}
      />

      {/* Creator */}
      <div className="ml-4">
        {/* TSK: <Link href={`/profiles/${id}`}> */}
        <h3 className="text-lg font-medium text-slate-900 dark:text-navy-50">
          {name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-navy-300">
          Proud Parent
          {/* TSK: Role */}
          {/* TSK: Badges */}
        </p>
      </div>
    </div>
  );
}
