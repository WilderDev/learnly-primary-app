import DashMainCol from '../../../(layout)/DashMainCol';
import DashSideCol from '../../../(layout)/DashSideCol';
import { DashPanel, DashPanelHeader } from '../../../(layout)/DashPanel';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import PublicProfileDetails from './PublicProfileDetails';
import PublicProfileLessonPlans from './PublicProfileLessonPlans';
import PublicProfileCurriculums from './PublicProfileCurriculums';

// * Params
interface IParams {
  params: {
    id: string;
  };
}

// * Page
export default async function TeacherPublicProfilePage({
  params: { id },
}: IParams) {
  // * Datas
  const { firstName, lastName, avatarUrl, type, status, lessons, curriculums } =
    await getTeacherProfile(id);

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol className="2xl:col-span-8">
        {/* User Profile Details Panel */}
        <DashPanel colNum={1}>
          {/* User Profile Details */}
          <PublicProfileDetails
            name={`${firstName} ${lastName}`}
            avatarUrl={avatarUrl}
            type={type}
            status={status}
          />
        </DashPanel>

        {/* User Lesson Plans Panel */}
        <DashPanel colNum={2}>
          <DashPanelHeader title={`${firstName}'s Lesson Plans`} />

          {/* User Lesson Plans */}
          <PublicProfileLessonPlans lessons={lessons} />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="2xl:col-span-4">
        {/* User Curriculums Panel */}
        <DashPanel colNum={1}>
          <DashPanelHeader title={`${firstName}'s Curriculums`} />

          {/* User Curriculums */}
          <PublicProfileCurriculums curriculums={curriculums} />
        </DashPanel>
      </DashSideCol>
    </>
  );
}

// * Fetcher
// Get Teacher Profile
async function getTeacherProfile(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('public_teacher_profile_view')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return redirect('/profile');

  const transformedCurriculums =
    (
      data.curriculums as unknown as {
        id: string;
        name: string;
        description: string;
        image_path: string;
        status: string;
      }[]
    )?.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      imageUrl: c.image_path,
    })) || [];

  const transformedLessons =
    (
      data.lessons as unknown as {
        id: string;
        title: string;
        image_path: string;
        tags: string[];
        length_in_min: number;
        subject: {
          id: string;
          name: string;
        };
        level: {
          id: string;
          name: string;
        };
        topic: {
          id: string;
          name: string;
        };
        created_at: string;
      }[]
    )?.map((l) => ({
      id: l.id,
      title: l.title,
      imageUrl: l.image_path,
      tags: l.tags,
      lengthInMin: l.length_in_min,
      subject: {
        id: l.subject.id,
        name: l.subject.name,
      },
      level: {
        id: l.level.id,
        name: l.level.name,
      },
      topic: {
        id: l.topic.id,
        name: l.topic.name,
      },
      createdAt: l.created_at,
    })) || [];

  const transformedData = {
    id: data.id!,
    firstName: data.first_name!,
    lastName: data.last_name!,
    avatarUrl: data.avatar_url!,
    status: data.status!,
    type: data.type!,
    curriculums: transformedCurriculums,
    lessons: transformedLessons,
  };

  return transformedData;
}

// TSK: Put query in migrations and add to prod
// CREATE VIEW public_teacher_profile_view AS (
//   SELECT
//     p.id,
//     p.first_name,
//     p.last_name,
//     p.avatar_url,
//     p.status,
//     p.type,
//     json_agg(DISTINCT jsonb_build_object(
//       'id', l.id,
//       'title', l.title,
//       'image_path', l.image_path,
//       'tags', l.tags,
//       'length_in_min', l.length_in_min,
//       'subject', jsonb_build_object(
//         'id', s.id,
//         'name', s.name
//       ),
//       'level', jsonb_build_object(
//         'id', lv.id,
//         'name', lv.name
//       ),
//       'topic', jsonb_build_object(
//         'id', t.id,
//         'name', t.name
//       ),
//       'created_at', l.created_at
//     )) FILTER (WHERE l.is_public = TRUE) AS lessons,
//     json_agg(DISTINCT jsonb_build_object(
//       'id', c.id,
//       'name', c.name,
//       'description', c.description,
//       'image_path', c.image_path,
//       'status', c.status
//     )) FILTER (WHERE c.is_public = TRUE AND c.status = 'PUBLISHED') AS curriculums
//   FROM
//     teacher_profiles p
//     LEFT JOIN lesson_plans l ON p.id = l.creator_id
//     LEFT JOIN subjects s ON l.subject = s.id
//     LEFT JOIN levels lv ON l.level = lv.id
//     LEFT JOIN topics t ON l.topic = t.id
//     LEFT JOIN curriculums c ON p.id = c.creator_id
//   GROUP BY
//     p.id
// );
