'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
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

    console.log('error:', error);

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
