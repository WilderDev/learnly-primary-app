'use client';

import { useRouter } from 'next/navigation';
import { ChatCompletionRequestMessage } from 'openai';
import { useState } from 'react';
import HelpCenterChatMessages from './HelpCenterChatMessages';
import HelpCenterChatForm from './HelpCenterChatForm';
import Button from '@/lib/components/ui/Button';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

// * Data
const initialHelpChatMessages: ChatCompletionRequestMessage[] = [
  {
    role: 'assistant',
    content: `What can I help you with today?`,
  },
];

// * Component
export default function HelpCenterChat() {
  // * Hooks / Context
  const router = useRouter(); // Next router for refreshing on reset

  // * State
  const [messages, setMessages] = useState(initialHelpChatMessages); // Chat messages
  const [loading, setLoading] = useState(false); // Loading state

  // * Handlers
  // Reset Chat
  const resetChat = () => {
    setMessages(initialHelpChatMessages);
    router.refresh();
  };

  // * Render
  return (
    <article className="max-h-[75vh] overflow-y-auto px-1 pb-4">
      {/* Chat Messages */}
      <HelpCenterChatMessages messages={messages} loading={loading} />

      {/* Chat Form */}
      <HelpCenterChatForm
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
  );
}
