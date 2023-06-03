import { supabaseServer } from '@/lib/auth/supabaseServer';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';
import Image from 'next/image';
import Link from 'next/link';

export default async function UnassignedLessonsPanel() {
  // * Data
  const unassignedLessons = await getUnassignedLessons();

  // * Render
  const hasLessons = unassignedLessons.length > 0;
  return hasLessons ? (
    <div className="flex flex-col space-y-4">
      {unassignedLessons
        ?.slice(0, 5)
        .map(({ id, title, imagePath, createdAt }) => (
          <Link
            className="block rounded-md bg-white p-3 shadow transition-colors hocus:bg-slate-50 hocus:shadow-md dark:bg-navy-800 dark:hocus:bg-navy-700 sm:p-4"
            href={`/lesson-plans/${id}`}
            key={id}
          >
            <div className="flex items-center space-x-4">
              {/* Image */}
              <Image
                src={imagePath}
                alt={title}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />

              {/* Info */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium leading-none text-slate-800 dark:text-navy-100">
                  {title}
                </h3>

                <p className="text-xs font-medium leading-none text-slate-600 dark:text-navy-200">
                  Created: {getDatestringFromTimestamp(createdAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  ) : (
    <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
      No unassigned lessons found :)
    </p>
  );
}

// * Fetcher
async function getUnassignedLessons() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .rpc('recent_unsaved_lessons', {
      user_id: session?.user.id!,
    })
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error || !data) return [];

  const transformedData = data.map((l) => ({
    id: l.id!,
    title: l.title!,
    imagePath: l.image_path!,
    createdAt: l.created_at!,
  }));

  return transformedData;
}
