'use client';

import { IChatContext, IChatRequest } from '@/assets/typescript/ai';
import { getAgeFromBirthday } from '@/lib/common/date.helpers';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ChatCompletionRequestMessage } from 'openai';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useHelpCenter } from './HelpCenterCtx';

// * Props
interface IProps {
  messages: ChatCompletionRequestMessage[];
  addMessages: (newMessages: ChatCompletionRequestMessage[]) => void;
  resetChat: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// * Component
export default function ChatForm({
  messages,
  addMessages,
  resetChat,
  loading,
  setLoading,
}: IProps) {
  // * Hooks / Context
  const { user, students } = useUser(); // Get user and students from context
  const { templateMessage } = useHelpCenter(); // Get template message from context

  // * State
  const [userMessage, setUserMessage] = useState(templateMessage || ''); // User message Input Query

  // * Handlers
  // Send Message
  const sendMessage = async () => {
    // 1. Set Initial States
    setLoading(true); // Set loading state to true

    // 2. Validate Input
    if (!userMessage || !user) return; // If no user message, return

    // 3. Create Request Message Object
    const message: ChatCompletionRequestMessage = {
      role: 'user',
      content: userMessage,
    };

    // 4. Create Request Context Object
    const context: IChatContext = {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      students: students.map((student) => ({
        name: `${student.firstName} ${student.lastName}`,
        age: getAgeFromBirthday(student.birthday),
      })),
      // HERE: Add more context . . .
    };

    // 5. Create Request Body Object
    const body: IChatRequest = {
      messages: [...messages, message].slice(-7), // Only send last 7 messages
      context, // Add context
    };

    // 6. Add Message to Chat and Clear Input
    addMessages([message]); // This get's removed when we get a response from OpenAI
    setUserMessage(''); // Reset user message input

    // 7. Send Request to OpenAI
    try {
      // Hit API Endpoint to create chat completion request
      const res = await fetch('/api/ai/chat?source=help-center', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      // Handle response
      if (!res.ok) return showError(); // If response is not ok, show error toast

      const data = (await res.json()) as ChatCompletionRequestMessage; // Parse response body

      // Handle response body
      if (!data) return showError(); // If no response body, or no choices, or no first choice, show error toast

      // 8. Add Response Message to Chat
      addMessages([message, data]);
    } catch (e) {
      showError(); // Display error toast
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Show Error
  const showError = () => {
    toast.error('Oh no! Something went wrong', {
      action: {
        label: 'Reset Chat',
        onClick: resetChat,
      },
    });
  };

  // * Effects
  // Reset Template Message
  useEffect(() => {
    if (templateMessage) setUserMessage(templateMessage);
  }, [templateMessage]);

  // * Render
  return (
    <Form onSubmit={sendMessage}>
      {/* Input */}
      <Input
        value={userMessage}
        setValue={setUserMessage}
        icon={QuestionMarkCircleIcon}
        label="Your Question"
        placeholder="I need help with..."
        labelHidden={true}
        autoFocus={true}
        required={true}
        cols={3}
      />

      {/* Submit */}
      <Button
        type="submit"
        loading={loading}
        disabled={loading || !userMessage}
      >
        Ask 🤗
      </Button>
    </Form>
  );
}
