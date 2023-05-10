// 'use server';

// // * Imports
// import { createRequest } from '@/lib/api/createRequest';
// import responseContract from '@/lib/api/responseContract';
// import { supabaseAdmin } from '@/lib/auth/supabaseAdmin';
// import { z } from 'zod';

// // * CREATE USER
// // Create User Schema
// const createUserSchema = z.object({
//   email: z.string().email(),
//   name: z.string().min(3),
// });

// // Create User Action
// const createUserAction = async (input: z.infer<typeof createUserSchema>) => {
//   try {
//     // 1. Create Supabase Admin
//     const sbAdmin = supabaseAdmin();

//     // 2. Check if the user already exists
//     const { data: user, error: userError } = await sbAdmin
//       .from('users')
//       .select('id')
//       .eq('email', input.email);

//     // 2a. If there is an error, return the error
//     if (userError) {
//       return responseContract(userError.message, false);
//     }

//     // 2b. If the user exists, return the error
//     if (user?.length) {
//       return responseContract('User already exists', false);
//     }

//     // 3. Create the user
//     const { error } = await sbAdmin.auth.admin.createUser({
//       email: input.email,
//       app_metadata: {
//         provider: 'email',
//       },
//       email_confirm: true,
//       user_metadata: {
//         first_name: input.name.split(' ')[0],
//         last_name: input.name.split(' ')[1] || '',
//       },
//     });

//     // 4. If there is an error, return the error
//     if (error) {
//       return responseContract(error.message, false);
//     }

//     // 5. Return success
//     return responseContract(
//       "Success! We've sent you an email to confirm your email address.",
//       true,
//     );
//   } catch (error) {
//     // 6. Return error
//     return responseContract((error as Error).message, false);
//   }
// };

// // Create User Request
// export const createUser = createRequest(createUserAction, createUserSchema);

// // Send Request to create user
// const { mutate, isLoading } = useRequest(createUser, {
//   onSuccess: (data) => (data.ok ? next() : toast.error(data.payload as string)),
//   onError: (error) => toast.error(error),
// });

// <Form
//         className="lg:grid-cols-2"
//         action={(formData: FormData) =>
//           mutate({
//             email: formData.get('Email') as string,
//             name: formData.get('Name') as string,
//           })
//         }
//       >
