'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

const createUserAction = async (input: z.infer<typeof createUserSchema>) => {
  return responseContract('Great work', true);
};

export const createUser = createRequest(createUserAction, createUserSchema);
