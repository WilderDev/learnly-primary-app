'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import baseUrl from '@/lib/common/baseUrl';
import { z } from 'zod';

const newsletterSignUpSchema = z.object({
  email: z.string().email(),
});

const newsletterSignUpAction = async (
  input: z.infer<typeof newsletterSignUpSchema>,
) => {
  const { email } = input;

  try {
    const res = await fetch(baseUrl + '/api/email/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (!res.ok) return responseContract(res.statusText, false);

    // revalidatePath(`/`);

    return responseContract("You're all signed up :)", true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const newsletterSignUp = createRequest(
  newsletterSignUpAction,
  newsletterSignUpSchema,
);
