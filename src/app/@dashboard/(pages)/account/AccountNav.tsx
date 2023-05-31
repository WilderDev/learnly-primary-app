'use client';

import cn from '@/lib/common/cn';
import { useAccount } from './AccountCtx';
import Button from '@/lib/components/ui/Button';
import { useAuth } from '@/lib/components/providers/AuthProvider';

// * Component
export default function AccountNav() {
  // * Hooks / Context
  const { tabs, activeTabId, setActiveTabId } = useAccount(); // Get the view from the context
  const { supabase } = useAuth(); // Get the supabase client from the auth context for sign out

  // * Render
  return (
    <ul className="flex flex-col space-y-2">
      {/* Tab Items */}
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            className={cn(
              'group flex w-full items-center px-4 py-2 rounded-md font-medium text-slate-700 dark:text-navy-200 transition-all duration-200 ease-in-out', // Base
              tab.id === activeTabId
                ? 'bg-green-500 dark:bg-green-600 text-white dark:text-navy-100 shadow-md' // Active
                : 'hocus:bg-slate-100 dark:hocus:bg-navy-600 hocus:text-slate-900 dark:hocus:text-navy-100', // Hover Inactive
            )}
            onClick={() => setActiveTabId(tab.id)}
            aria-current={tab.id === activeTabId}
            type="button"
          >
            {/* Icon */}
            <tab.icon className="w-6 h-6" />

            {/* Text */}
            <span className="ml-3">{tab.title}</span>
          </button>
        </li>
      ))}

      {/* Sign Out Button */}
      <li className="pt-3">
        <Button
          className="border-0.5 w-full"
          size="sm"
          variant="dark"
          fill="outline"
          shadow="md"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </Button>
      </li>
    </ul>
  );
}
