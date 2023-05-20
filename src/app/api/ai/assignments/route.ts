import { OpenAIStream } from '@/lib/ai/openai';

export async function POST(request: Request) {
  const { questions, lessonPlanContent, lessonPlanGrade, additionalComments } =
    (await request.json()) as any;

  // if (!id || !title || !questions || !lessonPlanContent || !lessonPlanGrade)
  //   return new Response('Invalid request', { status: 400 });

  // const prompt = generateLessonPlanPrompt({ lesson, teacher, students });
  const prompt = `
  Create a fill-in-the-blank or multiple choice worksheet for a ${lessonPlanGrade} grade student based on the following lesson content. 
  Each question should focus on testing the student's knowledge of the concepts from the lesson.
  Include a Student Information section, followed by the questions, and conclude with an Answer Key.
  
  # Student Information
  Name: __________
  Date: __________
  
  # Lesson Content
  ${lessonPlanContent}
  
  # Instructions
  Create a worksheet with ${questions} well-structured questions that test the student's understanding of the key concepts. 
  Questions should not focus on the structure or materials used in the lesson, but rather the principles or knowledge shared in the lesson content. 
  Multiple choice questions should provide 3 incorrect and 1 correct answer options. 
  Fill-in-the-blank questions should have a single correct answer. 
  Return the worksheet in clean markdown format.

  # Example Questions
  **Fill-in-the-blank example**: ________ is an important concept from this lesson.
  **Multiple-choice example**: Which of the following is related to the key concept of the lesson?
  (a) Option 1
  (b) Option 2
  (c) Option 3
  (d) Option 4
  
  ${additionalComments && 'Additional guidelines: ' + additionalComments}.

  After generating the worksheet, create an answer key that provides the correct answers to the questions.
  
  **Begin generation here:**
  `.trim();

  const payload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.3,
    frequency_penalty: 0.6,
    presence_penalty: 0.5,
    max_tokens: 3000,
    stream: true,
    n: 1,
  };

  // 4. Send request to OpenAI
  const stream = await OpenAIStream(payload);

  console.log(payload);

  if (!stream) return new Response('Error', { status: 500 });

  // 5. Return response
  return new Response(stream);
}

export const runtime = 'edge'; // Closer to user's location (faster)
