'use client';

import { Card } from '@/lib/components/ui/Card';
import { getIndexColors } from '@/lib/theme/enumColors';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { useHelpCenter } from './HelpCenterCtx';

// * Data
const prompts: string[] = [
  'What are the best resources for teaching mathematics to a 4th grader at home?',
  'How can I create a balanced homeschooling schedule for my children?',
  'What are some creative ways to teach history at home?',
  'How can I integrate physical education into our homeschooling routine?',
  'What are some homeschooling techniques for children with ADHD?',
  'What are the pros and cons of different homeschooling approaches, such as traditional, Montessori, and unschooling?',
  'How can I incorporate science experiments into our homeschool curriculum?',
  'What are some recommended reading materials for a 7th-grade English class?',
  'How can I help my child with homeschool socialization?',
  'What tips do you have for teaching a second language at home?',
  'What homeschooling resources are available for children with special needs?',
  "How can I assess my child's progress in our homeschooling program?",
  'What are some ideas for field trips and experiential learning opportunities in our local area?',
  'How can I create a homeschool plan that aligns with common core standards?',
  'What are some strategies for teaching writing skills to my homeschooler?',
  "What's the best way to prepare my homeschooler for standardized tests?",
  'How can I incorporate arts and music into my homeschool curriculum?',
  'What are the legal requirements for homeschooling in my state?',
  'What online tools and apps are beneficial for homeschooling?',
  'How do I make the transition from traditional schooling to homeschooling smoother for my child?',
];

// * Component
export default function HelpCenterPrompts() {
  // * Hooks / Context
  const { setTemplateMessage } = useHelpCenter(); // Set template message from context

  // * Render
  return (
    <section className="flex flex-wrap gap-4">
      {prompts.map((prompt, i) => (
        <Card
          className="w-full sm:w-[48%] lg:w-[31%] font-medium text-sm group hocus:cursor-pointer hocus:bg-slate-700/25 dark:hocus:bg-navy-900/25"
          decoration={getIndexColors(i).BG.GRADIENT}
          onClick={() => setTemplateMessage(prompt)}
          key={i}
        >
          {/* Prompt */}
          {prompt}

          {/* Overlay */}
          <div className="absolute bottom-0 right-0 m-1 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-xs mr-2">Ask</span>
            <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
          </div>
        </Card>
      ))}
    </section>
  );
}
