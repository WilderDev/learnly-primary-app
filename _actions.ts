'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import baseUrl from '@/lib/common/baseUrl';
import { z } from 'zod';

const generateLessonPlanSchema = z.object({
  subject: z.string().nonempty(), // TSK: Add enum
  level: z.string().nonempty(), // TSK: Add enum
  topic: z.string().nonempty(), // TSK: Add enum
});

const generateLessonPlanAction = async (
  input: z.infer<typeof generateLessonPlanSchema>,
) => {
  console.log('input:', input);

  try {
    const res = await fetch(baseUrl + '/api/ai/lesson-plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    console.log('res:', res);
    console.log('res.body:', res.body);

    return responseContract(res.body, true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const generateLessonPlan = createRequest(
  generateLessonPlanAction,
  generateLessonPlanSchema,
);

// const { mutate, isLoading } = useRequest(generateLessonPlan, {
//   onSuccess: (data) => {
//     if (data.ok) {
//       toast.success('Lesson Plan Generated!');
//     } else {
//       toast.error('Something went wrong...');
//     }
//   },
//   onError: (error) => toast.error(error),
// });

// action={() =>
//   mutate({
//     subject: 'Mathematics',
//     level: 'Pre-K',
//     topic: 'Addition',
//   })
// }
