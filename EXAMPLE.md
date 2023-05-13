## Example Action

_action.ts_:

```ts
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
```

```tsx
const { mutate, isLoading } = useRequest(signInUserWithEmail, {
  onSuccess: (data) => {
    if (data.ok) {
      toast.success('Check your email for a sign in link!');
      close();
      openSuccess();
    } else {
      toast.error("We couldn't sign you in. Please try again.");
    }
  },
  onError: (error) => toast.error(error),
});

// . . .

mutate({ email, redirectUrl: pathname });
```
