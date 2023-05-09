'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { z } from 'zod';

export const createUser = createRequest(
  z.object({
    email: z.string().email(),
    name: z.string().min(3),
  }),
)(async (input) => {
  console.log('input:', input);
  return responseContract('Great work', true);
});
