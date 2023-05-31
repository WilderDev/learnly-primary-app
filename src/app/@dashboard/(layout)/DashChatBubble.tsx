'use client';

import Modal from '@/lib/components/popouts/Modal';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ChatContainer from '../(pages)/help-center/ChatContainer';

// * Component
export default function DashChatBubble() {
  // * Hooks / Context
  const pathname = usePathname();

  // * State
  const [isOpen, setOpen] = useState(false);

  // * Render
  const isLessonPlan = pathname.includes('/lesson-plans/'); // Check if we're on a lesson plan page
  return (
    <>
      {/* Chat Bubble Button */}
      <button
        className="fixed top-0 sm:top-auto sm:bottom-0 right-0 z-40 m-4 rounded-full bg-gradient-to-tl from-green-500 via-emerald-600 to-green-700 p-2 sm:p-3 md:p-4 text-white shadow-lg transition-all hocus:animate-wave hocus:bg-gradient-to-br hocus:from-green-600 hocus:via-emerald-700 hocus:to-green-800 hocus:text-slate-50 hocus:shadow-xl hocus:ring-2 hocus:ring-green-500 hocus:ring-offset-2 hocus:ring-offset-green-500 print:hidden"
        onClick={() => setOpen(!isOpen)}
      >
        <ChatBubbleBottomCenterIcon className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
      </button>

      {/* Chat Modal */}
      <Modal
        size="xl"
        isVisible={isOpen}
        close={() => setOpen(false)}
        portalName="chat-portal"
      >
        <ChatContainer
          initialMessage={
            isLessonPlan
              ? {
                  role: 'system',
                  content: 'What do you need help with on this lesson plan?',
                }
              : undefined
          }
        />
      </Modal>
    </>
  );
}
