'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseAdmin } from '@/lib/auth/supabaseAdmin';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  avatar: z.string(),
});

const updateProfileAction = async (
  input: z.infer<typeof updateProfileSchema>,
) => {
  try {
    const supabase = supabaseServer();
    const sbAdmin = supabaseAdmin();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase
      .from('teacher_profiles')
      .update({
        first_name: input.firstName,
        last_name: input.lastName,
        avatar_url: input.avatar,
      })
      .eq('id', session?.user?.id);

    const { error: error2 } = await supabase.auth.updateUser({
      email: input.email,
      phone: input.phone,
    });

    // email: input.email, // TSK :on auth.users
    // phone: input.phone, // TSK :on auth.users

    if (error) return responseContract(error.message, false);

    revalidatePath('/account'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const updateProfile = createRequest(
  updateProfileAction,
  updateProfileSchema,
);
