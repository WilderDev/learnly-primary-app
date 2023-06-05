import { supabaseServer } from '@/lib/auth/supabaseServer';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors } from '@/lib/theme/enumColors';
import Image from 'next/image';

// * Component
export default async function LessonCreatorCommunityLessons() {
  // * Data
  const communityLessons = await getCommunityLessons();

  // * Render
  return (
    <section className="flex xl:flex-col space-y-6 flex-wrap gap-6 xl:gap-x-0">
      {communityLessons?.map((lesson) => (
        <Card
          className="w-full md:w-1/2 lg:w-1/3 xl:w-full flex flex-col justify-center space-y-4"
          url={`/lesson-plans/${lesson.id}`}
          key={lesson.id}
        >
          <div className="flex items-center space-x-4 w-10/12">
            {/* Image */}
            <Image
              className="rounded-full w-12 h-12"
              src={lesson.image_path}
              alt={lesson.title}
              width={1600}
              height={900}
            />

            {/* Title */}
            <h3 className="text-sm xl:text-md  font-semibold">
              {lesson.title}
            </h3>
          </div>

          {/* Length in Min */}
          <Card.Bubble
            content={lesson.length_in_min.toString() + ' min'}
            colors={getIndexColors(0).TEXT.DARK}
          />

          {/* Tags */}
          {/* <Card.Tags className="self-end flex-nowrap">
            {lesson.tags?.slice(0, 4).map((tag, idx) => (
              <Card.Tag
                content={tag}
                colors={getIndexColors(idx).BLEND.SUBDUED}
                key={tag}
              />
            ))}
          </Card.Tags> */}
        </Card>
      ))}
    </section>
  );
}

// * Fetcher
async function getCommunityLessons() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('lesson_plans')
    .select('*')
    .neq('creator_id', session?.user.id)
    .order('created_at', { ascending: true })
    .limit(5);

  if (error) return [];

  // const transformedData =

  return data;
}
