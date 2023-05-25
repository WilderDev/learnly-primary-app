'use client';

import { useRouter } from 'next/navigation';
import { ChatCompletionRequestMessage } from 'openai';
import { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';
import Button from '@/lib/components/ui/Button';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import ClientWrapper from '@/lib/components/layout/ClientWrapper';

// * Props
interface IProps {
  initialMessage?: ChatCompletionRequestMessage;
}

// * Component
export default function ChatContainer({
  initialMessage = {
    role: 'assistant',
    content: `What can I help you with today?`,
  },
}: IProps) {
  // * Hooks / Context
  const router = useRouter(); // Next router for refreshing on reset

  // * State
  const [messages, setMessages] = useState([initialMessage]); // Chat messages
  const [loading, setLoading] = useState(false); // Loading state

  // * Handlers
  // Reset Chat
  const resetChat = () => {
    setMessages([initialMessage]);
    router.refresh();
  };

  // * Render
  return (
    <ClientWrapper>
      <article className="max-h-[75vh] overflow-y-auto px-1 pb-4">
        {/* Chat Messages */}
        <ChatMessages messages={messages} loading={loading} />

        {/* Chat Form */}
        <ChatForm
          messages={messages}
          addMessages={(newMessages: ChatCompletionRequestMessage[]) =>
            setMessages([...messages, ...newMessages])
          }
          resetChat={resetChat}
          loading={loading}
          setLoading={setLoading}
        />

        {/* Chat Reset Button */}
        <Button
          className="absolute top-0 right-0 z-10 group"
          variant="secondary"
          fill="none"
          shadow="none"
          onClick={resetChat}
          disabled={loading}
        >
          <ArrowPathIcon className="w-6 h-6 icon-spin text-blue-500/50 group-hover:text-blue-500 group-focus:text-blue-500 transition-colors duration-300" />
        </Button>
      </article>
    </ClientWrapper>
  );
}
