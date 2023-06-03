'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { dateToTimestampz } from '@/lib/common/date.helpers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const saveLessonPlanSchema = z.object({
  lesson_plan_id: z.string().uuid(),
  scheduled_date: z.date(),
  students: z.array(z.string().uuid()),
});

async function saveLessonPlanAction(
  input: z.infer<typeof saveLessonPlanSchema>,
) {
  const { lesson_plan_id, scheduled_date, students } = input;

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

    // revalidatePath(`/lesson-plans/${lesson_plan_id}`); // ✅
    revalidatePath('/schedule-builder'); // ✅
    revalidatePath('/'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const saveLessonPlan = createRequest(
  saveLessonPlanAction,
  saveLessonPlanSchema,
);

const markAsCompleteSchema = z.object({
  lesson_plan_id: z.string().uuid(),
  completion_date: z.date(),
});

async function markAsCompleteAction(
  input: z.infer<typeof markAsCompleteSchema>,
) {
  const { lesson_plan_id, completion_date } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase
      .from('user_lesson_plans')
      .update({
        completion_date: dateToTimestampz(completion_date),
        status: 'completed',
      })
      .eq('teacher_id', session?.user.id!)
      .eq('lesson_plan_id', lesson_plan_id);

    if (error) return responseContract(error.message, false);

    revalidatePath(`/lesson-plans/${lesson_plan_id}`); // ✅
    revalidatePath('/'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const markAsComplete = createRequest(
  markAsCompleteAction,
  markAsCompleteSchema,
);
