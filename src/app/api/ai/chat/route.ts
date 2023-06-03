// * API Handlers

import { IChatRequest } from '@/assets/typescript/ai';
import { ai } from '@/lib/ai/openai';
import { NextRequest } from 'next/server';
import {
  ChatCompletionRequestMessage,
  CreateChatCompletionRequest,
} from 'openai';

// POST /api/ai/chat
export async function POST(request: NextRequest) {
  // 1. Retrieve the request's body and Search Params
  const { messages, context } = (await request.json()) as IChatRequest;
  const source = request.nextUrl.searchParams.get('source');

  // 2. Validate the request
  if (!messages.length || !context)
    return new Response('Invalid request', { status: 400 });

  // 3. Create System Message
  const systemMessage: ChatCompletionRequestMessage = {
    role: 'system',
    content:
      `You are a chat help center bot for homeschool parents/teachers using a new online learning platform that generates lesson plans and curriculum for children/students.

	**Parent:** ${context.name}
	- Number of children/students: ${context.students.length}

	**Children/Students:**
	${context.students
    .map((student) => `- ${student.name} (${student.age} years old)`)
    .join('\n')}

	${
    source === 'lesson-plan' &&
    context.lesson &&
    `
	**Lesson Plan:**
	- Title: ${context.lesson.title}
	- Subject: ${context.lesson.subject}
	- Level: ${context.lesson.level}
	- Topic: ${context.lesson.topic}
	`
  }

	Answer as concisely as possible. Very short answers. If you don't know the answer, say so. If you need more information, ask for it.

	Only answer questions related to homeschooling. If a question is not related to homeschooling, education, or parenting, say so in a polite manner.
	`.trim(),
  };

  // 4. Create Request Body Payload
  const payload: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    messages: [systemMessage, ...messages],
    user: context.id,
    temperature: 0.4,
    n: 1,
    max_tokens: 2000,
    presence_penalty: 1.0,
    frequency_penalty: 1.0,
  };

  // 5. Send Request to OpenAI
  try {
    const chatCompletion = await ai.createChatCompletion(payload); // Create Chat Completion

    const newMessageRes = JSON.stringify(
      chatCompletion.data.choices[0].message,
    ); // Convert to JSON String

    // Handle Error Response
    if (!newMessageRes)
      return new Response('Internal Server Error', { status: 500 });

    return new Response(newMessageRes, {
      status: 200,
    }); // Return Response
  } catch (e) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const runtime = 'edge'; // Closer to user's location (faster)
