'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { dateToTimestampz } from '@/lib/common/date.helpers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const saveCurriculumSchema = z.object({
  curriculum_id: z.string().uuid(),
  student_ids: z.array(z.string().uuid()),
});

const saveCurriculumAction = async (
  input: z.infer<typeof saveCurriculumSchema>,
) => {
  const { curriculum_id, student_ids } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('user_curriculums').insert({
      curriculum_id,
      student_ids,
      user_id: session?.user.id!,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath(`/curriculum-roadmaps`);

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const saveCurriculum = createRequest(
  saveCurriculumAction,
  saveCurriculumSchema,
);

const saveCurriculumLessonPlanSchema = z.object({
  lesson_plan_id: z.string().uuid(),
  curriculum_lesson_id: z.string().uuid(),
  user_curriculum_id: z.string().uuid(),
  scheduled_date: z.date(),
  students: z.array(z.string().uuid()),
});

const saveCurriculumLessonPlanAction = async (
  input: z.infer<typeof saveCurriculumLessonPlanSchema>,
) => {
  const {
    lesson_plan_id,
    curriculum_lesson_id,
    user_curriculum_id,
    scheduled_date,
    students,
  } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('user_lesson_plans').insert({
      teacher_id: session?.user.id!,
      lesson_plan_id,
      scheduled_date: dateToTimestampz(scheduled_date),
      students,
      status: 'scheduled',
    });

    if (error) return responseContract(error.message, false);

    const { error: user_curriculum_progress_error } = await supabase
      .from('user_curriculum_progress')
      .insert({
        lesson_id: curriculum_lesson_id,
        user_id: session?.user.id!,
        user_curriculum_id: user_curriculum_id,
      });

    revalidatePath(`/lesson-plans/${lesson_plan_id}`);
    revalidatePath('/schedule-builder');
    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const saveCurriculumLessonPlan = createRequest(
  saveCurriculumLessonPlanAction,
  saveCurriculumLessonPlanSchema,
);
