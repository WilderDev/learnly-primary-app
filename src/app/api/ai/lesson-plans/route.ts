import { IStudentPromptReq } from '@/assets/typescript/ai';
import { ITeacherPromptReq } from '@/assets/typescript/ai';
import { ILessonPlanPromptReq } from '@/assets/typescript/ai';
import { OpenAIStream } from '@/lib/ai/openai';
import { generateLessonPlanPrompt } from '@/lib/ai/prompts';

// * Props
export interface IAILessonPlanPostReq {
  lesson: ILessonPlanPromptReq;
  teacher: ITeacherPromptReq;
  students: IStudentPromptReq['children'];
}

// * API Route Handler (POST)
export async function POST(request: Request) {
  // 1. Get request body
  const { lesson, teacher, students } =
    (await request.json()) as IAILessonPlanPostReq;

  // 2. Validate request body
  if (!lesson.topic || !teacher.name || !students.length)
    return new Response('Invalid request', { status: 400 });

  // 3. Generate lesson plan prompt and Payload
  const prompt = generateLessonPlanPrompt({ lesson, teacher, students });
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

  // 5. Return response
  return new Response(stream);
}

export const runtime = 'edge'; // Closer to user's location (faster)
