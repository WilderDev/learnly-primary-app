'use client';

// * Imports
import Button from '@/lib/components/ui/Button';
import { useState } from 'react';
import MarketingNavAuthSuccessModal from './MarketingNavAuthSuccessModal';
import MarketingNavAuthModal from './MarketingNavAuthModal';

// * Component
export default function MarketingNavCTA() {
  // * State
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  // * Render
  return (
    <>
      {/* Buttons */}
      <div className="flex items-center space-x-6">
        {/* Sign In Button */}
        <Button
          size="sm"
          fill="none"
          effect="scale"
          shadow="none"
          className="text-slate-500 hover:text-slate-600 dark:text-navy-300 dark:hover:text-navy-200"
          onClick={() => setAuthModalOpen(true)}
        >
          Sign In
        </Button>

        {/* CTA Free Trial */}
        <Button
          className="text-xs sm:text-sm md:text-base"
          size="md"
          fill="gradient"
          effect="scale"
          shadow="md"
          rounded="lg"
          url="/onboarding"
        >
          <span className="hidden sm:inline-block mr-2">👉</span> Start My Free
          Trial
        </Button>
      </div>

      {/* Sign In Modal */}
      <MarketingNavAuthModal
        isOpen={isAuthModalOpen}
        close={() => setAuthModalOpen(false)}
        openSuccess={() => setSuccessModalOpen(true)}
      />

      {/* Success Modal */}
      <MarketingNavAuthSuccessModal
        isOpen={isSuccessModalOpen}
        close={() => setSuccessModalOpen(false)}
      />
    </>
  );
}
