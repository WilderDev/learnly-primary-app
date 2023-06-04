import { OpenAIStream } from '@/lib/ai/openai';
import { generateAssignmentPrompt } from '@/lib/ai/prompts';

// * Props
export interface IAIAssignmentPostReq {
  questions: number;
  lessonPlanContent: string;
  lessonPlanGrade: string;
  additionalComments: string;
}

// * API Route Handler (POST)
export async function POST(request: Request) {
  // 1. Get request body
  const { questions, lessonPlanContent, lessonPlanGrade, additionalComments } =
    (await request.json()) as IAIAssignmentPostReq;

  // 2. Validate request body
  if (!questions || !lessonPlanContent || !lessonPlanGrade)
    return new Response('Invalid request', { status: 400 });

  // 3. Generate assignment prompt and Payload
  const prompt = generateAssignmentPrompt({
    questions,
    lessonPlanContent,
    lessonPlanGrade,
    additionalComments,
  });

  const payload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.5,
    frequency_penalty: 0.6,
    presence_penalty: 0.5,
    max_tokens: 2500,
    stream: true,
    n: 1,
  };

  // 4. Send request to OpenAI
  const stream = await OpenAIStream(payload);

  if (!stream) return new Response('Error', { status: 500 });

  // 5. Return response
  return new Response(stream);
}

export const runtime = 'edge'; // Closer to user's location (faster)
