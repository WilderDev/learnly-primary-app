'use client';

import cn from '@/lib/common/cn';
import LoadingChatBubbles from '@/lib/components/loading/LoadingChatBubbles';
import { ChatCompletionRequestMessage } from 'openai';
import { useEffect, useRef } from 'react';

// * Props
interface IProps {
  messages: ChatCompletionRequestMessage[];
  loading: boolean;
}

// * Component
export default function HelpCenterChatMessages({ messages, loading }: IProps) {
  // * Refs
  const messageRef = useRef<HTMLDivElement>(null); // Ref to scroll to bottom of chat on overflow

  // * Effects
  // Scroll to bottom of chat on overflow
  useEffect(() => {
    messageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages]);

  // * Render
  return (
    <div className="flex flex-col space-y-6 overflow-y-auto mb-8">
      {messages?.map(({ role, content }, idx) => (
        <div
          className={cn(
            'flex flex-col rounded shadow',
            role === 'user' ? 'ml-auto' : 'items-start self-start',
          )}
          ref={idx === messages.length - 1 ? messageRef : null}
          key={idx}
        >
          <div
            className={cn(
              'rounded-lg py-2.5 px-4 text-lg',
              role === 'user'
                ? 'bg-green-500 text-white'
                : 'bg-slate-100 text-slate-900 dark:bg-navy-700 dark:text-navy-100',
            )}
          >
            {content}
          </div>
        </div>
      ))}

      {/* Loading Chat Bubbles */}
      {loading && <LoadingChatBubbles />}
    </div>
  );
}
