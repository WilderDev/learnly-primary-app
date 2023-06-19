import { supabaseServer } from '@/lib/auth/supabaseServer';
import cn from '@/lib/common/cn';
import { formatExactDateString } from '@/lib/common/date.helpers';
import { getEventColor } from '@/lib/theme/enumColors';
import Image from 'next/image';
import Link from 'next/link';

// * Component
export default async function LessonTimeline() {
  // * Data
  const timeline = await getTimeline();

  // * Render
  return timeline?.length > 0 ? (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline?.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-slate-200 dark:bg-navy-500"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-center space-x-3">
                <div>
                  <span
                    className={cn(
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-navy-900',
                      getEventColor('LESSON').BG.DARK,
                    )}
                  >
                    <Image
                      className="h-7 w-7 text-white rounded-full"
                      aria-hidden="true"
                      src={event.image}
                      alt={event.title}
                      width={20}
                      height={20}
                    />
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 justify-between space-x-4">
                  <div>
                    <Link
                      className="text-sm text-slate-700 dark:text-navy-100 hocus:text-slate-900 dark:hocus:text-navy-50 transition-colors duration-200"
                      href={`/lesson-plans/${event.id}`}
                    >
                      {event.title}
                    </Link>
                  </div>

                  {event.completion_date && (
                    <div className="whitespace-nowrap text-right text-sm text-slate-600 dark:text-navy-200">
                      <time dateTime={event.completion_date}>
                        {formatExactDateString(
                          event.completion_date.split('T')[0],
                          {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          },
                        )}
                      </time>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
      No lessons have been scheduled yet.
    </p>
  );
}

// * Fetcher
async function getTimeline() {
  const supabase = supabaseServer(); // Create supabase instance for server-side
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('lesson_timeline_view')
    .select(`*`)
    .eq('teacher_id', session?.user.id);

  if (error || !data) return [];

  // Transform Data
  const timeline = data.map((lesson) => ({
    id: lesson.lesson_id!,
    title: lesson.name!,
    completion_date: lesson.completion_date!,
    image: lesson.image_path!,
    students: lesson.students as {
      id: string;
      first_name: string;
      avatar_url: string;
    }[],
  }));

  return timeline;
}
