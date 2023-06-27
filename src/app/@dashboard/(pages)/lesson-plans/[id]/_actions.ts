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

const editLessonPlanSchema = z.object({
  lesson_plan_id: z.string().uuid(),
  title: z.string().optional(),
  image_url: z.string().optional(),
});

async function editLessonPlanAction(
  input: z.infer<typeof editLessonPlanSchema>,
) {
  const { lesson_plan_id, title, image_url } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase
      .from('lesson_plans')
      .update({ image_path: image_url, title: title })
      .eq('id', lesson_plan_id)
      .eq('creator_id', session?.user.id);

    if (error) return responseContract(error.message, false);

    revalidatePath(`/lesson-plans/${lesson_plan_id}`);
    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const editLessonPlan = createRequest(
  editLessonPlanAction,
  editLessonPlanSchema,
);

const deleteOldImagesSchema = z.object({
  lesson_plan_id: z.string().uuid(),
});

async function deleteOldImagesAction(
  input: z.infer<typeof deleteOldImagesSchema>,
) {
  const { lesson_plan_id } = input;

  try {
    const supabase = supabaseServer();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { data: lesson_plan_creator_id, error: lessonPlanError } =
      await supabase
        .from('lesson_plans')
        .select('creator_id')
        .eq('id', lesson_plan_id)
        .single();

    if (
      !lesson_plan_creator_id ||
      lesson_plan_creator_id.creator_id !== session?.user.id
    )
      return responseContract('Operation Not Allowed', false);

    const { data: dataList, error: dataListError } = await supabase.storage
      .from('avatars')
      .list(`lessons/${lesson_plan_id}`);

    if (dataListError) return responseContract(dataListError.message, false);

    const filesToDelete = dataList.map(
      (file) => `lessons/${lesson_plan_id}/${file.name}`,
    );

    if (filesToDelete.length > 0) {
      const { error: deleteError } = await supabase.storage
        .from('avatars')
        .remove(filesToDelete);

      if (deleteError) return responseContract(deleteError.message, false);
    }

    revalidatePath(`/lesson-plans/${lesson_plan_id}`);
    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const deleteOldImages = createRequest(
  deleteOldImagesAction,
  deleteOldImagesSchema,
);
