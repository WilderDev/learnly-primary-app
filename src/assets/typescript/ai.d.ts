import { ChatCompletionRequestMessage } from 'openai';

export interface IChatRequest {
  messages: ChatCompletionRequestMessage[];
  context: IChatContext;
}

export interface IChatContext {
  id: string;
  name: string;
  students: {
    name: string;
    age: number;
  }[];
  lesson?: {
    title: string;
    subject: string;
    level: string;
    topic: string;
    // . . .
  };
}
