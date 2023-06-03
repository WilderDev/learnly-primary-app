import { OpenAIStream } from '@/lib/ai/openai';

export async function POST(request: Request) {
  const { questions, lessonPlanContent, lessonPlanGrade, additionalComments } =
    (await request.json()) as {
      questions: number;
      lessonPlanContent: string;
      lessonPlanGrade: string;
      additionalComments: string;
    };

  function splitQuestions(totalQuestions: number) {
    const multipleChoiceQuestions = Math.floor(Math.random() * totalQuestions);
    const fillInTheBlankQuestions = totalQuestions - multipleChoiceQuestions;

    return {
      multipleChoiceQuestions,
      fillInTheBlankQuestions,
    };
  }

  const { multipleChoiceQuestions, fillInTheBlankQuestions } =
    splitQuestions(questions);

  const prompt = `
Create an assignment worksheet that a homeschool parent can use to give to their child (Grade: ${lessonPlanGrade}). The worksheet should be based on the lesson content provided below.

***LESSON CONTENT***
${lessonPlanContent}
***

You should follow the guidelines below when creating the worksheet:
1. The worksheet should contain ${questions} questions - ${fillInTheBlankQuestions} fill-in-the-blank and ${multipleChoiceQuestions} multiple choice questions.
2. Multiple choice questions should have four options - one correct and three incorrect.
3. Focus on testing understanding of the key concepts in the lesson content. Avoid questions focused on the structure or materials used in the lesson.
4. Generate the worksheet and answer key in clean markdown format with a space for name and date at the top. Put all questions first then answers at the end. <li> elements should NOT have a paragraph inside them. All Headings should have their own line. Do NOT use code or <pre> blocks.
5. Additional guidelines: ${additionalComments ?? 'N/A'}.

Follow the example below when creating the worksheet:

***SAMPLE WORKSHEET***

Name: ___________   Date: ___________

## Questions

1. Which of the following is the capital of England?
- (a) Paris
- (b) Madrid
- (c) London
- (d) Berlin

2. What ...

## Answers

1. London (c)
2. ...

***
`.trim();

  const payload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.5,
    frequency_penalty: 0.6,
    presence_penalty: 0.5,
    max_tokens: 3000,
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
