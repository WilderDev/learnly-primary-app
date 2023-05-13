'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import baseUrl from '@/lib/common/baseUrl';
import { z } from 'zod';

const signInUserWithEmailSchema = z.object({
  email: z.string().email(),
  redirectUrl: z.string().url().optional(),
});

const signInUserWithEmailAction = async (
  input: z.infer<typeof signInUserWithEmailSchema>,
) => {
  try {
    const supabase = supabaseServer();

    const { error } = await supabase.auth.signInWithOtp({
      email: input.email,
      options: {
        emailRedirectTo: input.redirectUrl || baseUrl,
        shouldCreateUser: false,
      },
    });

    console.log('error:', error);

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
