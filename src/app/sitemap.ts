import { supabaseServer } from '@/lib/auth/supabaseServer';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicLessonRoutes = await getDynamicLessonRoutes();
  const dynamicCurriculumRoutes = await getDynamicCurriculumRoutes();

  return [
    {
      url: '/',
      lastModified: new Date(),
    },
    {
      url: '/onboarding',
      lastModified: new Date(),
    },
    ...dynamicLessonRoutes,
    ...dynamicCurriculumRoutes,
  ];
}

async function getDynamicLessonRoutes() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans')
    .select('id')
    .eq('is_public', true);

  if (error) return [];

  const lessonRoutes = data.map((lesson) => ({
    url: `/lesson-plans/${lesson.id}`,
    lastModified: new Date(),
  }));

  return lessonRoutes;
}

async function getDynamicCurriculumRoutes() {
  const defaultRoutes = [
    {
      url: '/curriculum-roadmaps',
      lastModified: new Date(),
    },
  ];

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('shareable_curriculum_topics_view')
    .select('id, subject_id, curriculum_id, level_id');

  if (error) return defaultRoutes;

  const curriculumRoutes = data.map((item) => ({
    url: `/curriculum-roadmaps/${item.curriculum_id}`,
    lastModified: new Date(),
  }));
  const subjectRoutes = data.map((item) => ({
    url: `/curriculum-roadmaps/${item.curriculum_id}/${item.subject_id}`,
    lastModified: new Date(),
  }));
  const levelRoutes = data.map((item) => ({
    url: `/curriculum-roadmaps/${item.curriculum_id}/${item.subject_id}/${item.level_id}`,
    lastModified: new Date(),
  }));
  const topicRoutes = data.map((item) => ({
    url: `/curriculum-roadmaps/${item.curriculum_id}/${item.subject_id}/${item.level_id}/${item.id}`,
    lastModified: new Date(),
  }));

  const allRoutes = [
    ...defaultRoutes,
    ...curriculumRoutes,
    ...subjectRoutes,
    ...levelRoutes,
    ...topicRoutes,
  ];

  return allRoutes;
}
