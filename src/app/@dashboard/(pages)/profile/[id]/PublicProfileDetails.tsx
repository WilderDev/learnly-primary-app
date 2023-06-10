import { Database } from '@/assets/typescript/db';
import { Card } from '@/lib/components/ui/Card';
import { getUserStatusColor } from '@/lib/theme/enumColors';
import Image from 'next/image';

// * Props
interface IProps {
  name: string;
  avatarUrl: string;
  type: Database['public']['Enums']['profile_type'];
  status: Database['public']['Enums']['profile_status'];
}

// * Component
export default function PublicProfileDetails({
  name,
  avatarUrl,
  type,
  status,
}: IProps) {
  // * Render
  return (
    <div className="flex space-x-4 items-center">
      {/* Image */}
      <Image
        className="rounded-full w-10 h-10"
        src={avatarUrl}
        alt={name}
        width={512}
        height={512}
      />

      {/* Name */}
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>

        {/* Type */}
        <p className="text-sm text-slate-600 dark:text-navy-200">{type}</p>
      </div>

      {/* Status */}
      <div className="mr-2">
        <Card.Bubble
          content={status}
          colors={getUserStatusColor(status).BLEND.SUBDUED}
        />
      </div>
    </div>
  );
}
