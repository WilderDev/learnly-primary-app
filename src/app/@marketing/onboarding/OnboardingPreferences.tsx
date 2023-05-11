'use client';

import CycleInput from '@/lib/components/form/CycleInputImage';
import Form from '@/lib/components/form/Form';
import { useTheme } from '@/lib/theme/ThemeCtx';
import { useOnboarding } from './OnboardingCtx';
import Button from '@/lib/components/ui/Button';
import { toast } from 'sonner';
import RadioImages from '@/lib/components/form/RadioImages';
import OnboardingStepHeader from './OnboardingStepHeader';
import { avatarImages } from './avatarImages';

// * Component
export default function OnboardingPreferences() {
  // * Hooks
  const { theme, setTheme } = useTheme();
  const { avatarUrl, setAvatarUrl, next } = useOnboarding();

  // * Render
  return (
    <>
      {/* Preferences Header */}
      <OnboardingStepHeader
        title="Now... A Little About You 🤗"
        subTitle="Have Fun and Get Creative!"
        p1="We like to enjoy the learning process and have fun while we do it!"
        p2="Pick an spirit animal that best represents you and ensure the color scheme is to your liking."
      />

      {/* Preferences Form */}
      <Form>
        {/* Avatar */}
        <RadioImages
          cols={3}
          label="Avatar"
          value={avatarUrl}
          setValue={setAvatarUrl}
          options={avatarImages}
        />

        <div className="flex mt-2 flex-col sm:flex-row space-y-4 sm:space-y-0 justify-around col-span-3">
          {/* Color Scheme */}
          <CycleInput
            labelHidden={true}
            className="w-full sm:w-48"
            label="Color Scheme"
            value={theme}
            setValue={setTheme}
            options={[
              { value: 'light', image: '/static/icons/sun.png' },
              { value: 'dark', image: '/static/icons/moon.png' },
            ]}
          />

          {/* Submit */}
          <Button
            type="button"
            disabled={!avatarUrl}
            onClick={() =>
              avatarUrl ? next() : toast.error('Please select an avatar')
            }
          >
            Next Step <span className="ml-2">👉</span>
          </Button>
        </div>
      </Form>
    </>
  );
}
