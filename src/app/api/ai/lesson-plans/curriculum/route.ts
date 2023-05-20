import { ICurriculumLessonPromptReq } from '@/assets/typescript/curriculum-roadmap';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';
import { ITeacherPromptReq } from '@/assets/typescript/lesson-plan';
import { OpenAIStream } from '@/lib/ai/openai';
import {
  generateCurriculumLessonPlanPrompt,
  generateLessonPlanPrompt,
} from '@/lib/ai/prompts';

// * Props
export interface IAICurriculumLessonPlanPostReq {
  lessonBody: ICurriculumLessonPromptReq;
  teacherBody: ITeacherPromptReq;
  studentsBody: IStudentPromptReq['students'];
}

// * API Route Handler (POST)
export async function POST(request: Request) {
  // 1. Get request body
  const { lessonBody, teacherBody, studentsBody } =
    (await request.json()) as IAICurriculumLessonPlanPostReq;

  // 2. Validate request body
  if (!lessonBody.lessonName || !teacherBody.name || !studentsBody.length)
    return new Response('Invalid request', { status: 400 });

  // 3. Generate lesson plan prompt and Payload
  const prompt = generateCurriculumLessonPlanPrompt({
    lessonBody,
    teacherBody,
    studentsBody,
  });

  const payload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.5,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    max_tokens: 3400,
    stream: true,
    n: 1,
  };

  // 4. Send request to OpenAI
  const stream = await OpenAIStream(payload);

  console.log('stream:', stream);

  if (!stream) return new Response('Error', { status: 500 });

  // 5. Return response
  return new Response(stream);
}

export const runtime = 'edge'; // Closer to user's location (faster)
