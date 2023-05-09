'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import baseUrl from '@/lib/common/baseUrl';
import { z } from 'zod';

const signInUserWithEmailSchema = z.object({
  email: z.string().email(),
});

const signInUserWithEmailAction = async (
  input: z.infer<typeof signInUserWithEmailSchema>,
) => {
  try {
    const supabase = supabaseClient();

    const { error } = await supabase.auth.signInWithOtp({
      email: input.email,
      options: {
        emailRedirectTo: baseUrl,
        shouldCreateUser: false,
      },
    });

    if (error) {
      return responseContract(error.message, false);
    }

    return responseContract('Success', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const signInUserWithEmail = createRequest(
  signInUserWithEmailAction,
  signInUserWithEmailSchema,
);
