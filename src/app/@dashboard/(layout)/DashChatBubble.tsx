'use client';

import Modal from '@/lib/components/popouts/Modal';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatContainer from '../(pages)/help-center/ChatContainer';
import ClientWrapper from '@/lib/components/layout/ClientWrapper';
import { IChatContext } from '@/assets/typescript/ai';
import { supabaseClient } from '@/lib/auth/supabaseClient';

// * Component
export default function DashChatBubble() {
  // * Hooks / Context
  const pathname = usePathname();

  // * State
  const [isOpen, setOpen] = useState(false);
  const [lessonPlanDetails, setLessonPlanDetails] =
    useState<IChatContext['lesson']>();

  // * Effects
  // Check if we're on a lesson plan page
  useEffect(() => {
    // Function to get lesson plan details
    async function getLessonPlanDetails() {
      const supabase = supabaseClient();

      const { data, error } = await supabase
        .from('lesson_plan_with_creator_view')
        .select('title, subject_name, level_name, topic_name')
        .eq('id', pathname.split('/lesson-plans/')[1])
        .single();

      if (error || !data) return null;

      const transformedData = {
        title: data.title!,
        subject: data.subject_name!,
        level: data.level_name!,
        topic: data.topic_name!,
      };

      setLessonPlanDetails(transformedData);
    }

    const isLessonPlanPath = pathname.includes('/lesson-plans/'); // Check if we're on a lesson plan page

    // If we're on a lesson plan page, fetch the lesson plan details
    if (isLessonPlanPath) {
      getLessonPlanDetails(); // Fetch & set lesson plan details
    }
  }, [pathname]);

  // * Render
  return (
    <ClientWrapper>
      {/* Chat Bubble Button */}
      <button
        className="fixed top-0 sm:top-auto sm:bottom-0 right-0 z-40 m-2 rounded-full bg-gradient-to-tl from-green-500 via-emerald-600 to-green-700 p-2 sm:p-3 md:p-4 text-white shadow-lg transition-all hocus:animate-wave hocus:bg-gradient-to-br hocus:from-green-600 hocus:via-emerald-700 hocus:to-green-800 hocus:text-slate-50 hocus:shadow-xl hocus:ring-2 hocus:ring-green-500 hocus:ring-offset-2 hocus:ring-offset-green-500 print:hidden"
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
        {lessonPlanDetails ? (
          <ChatContainer
            initialMessage={{
              role: 'system',
              content: 'What do you need help with on this lesson plan?',
            }}
            lessonContext={lessonPlanDetails}
          />
        ) : (
          <ChatContainer />
        )}
      </Modal>
    </ClientWrapper>
  );
}
