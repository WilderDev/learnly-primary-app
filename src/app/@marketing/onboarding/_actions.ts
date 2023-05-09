'use server';

// * Imports
import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { z } from 'zod';

// * CREATE USER
// Create User Schema
const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

// Create User Action
const createUserAction = async (input: z.infer<typeof createUserSchema>) => {
  return responseContract('Great work', true);
};

// Create User Request
export const createUser = createRequest(createUserAction, createUserSchema);
