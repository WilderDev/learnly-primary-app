'use client';

import CycleInput from '@/lib/components/form/CycleInputImage';
import Form from '@/lib/components/form/Form';
import { useTheme } from '@/lib/theme/ThemeCtx';
import { useOnboarding } from './OnboardingCtx';
import Button from '@/lib/components/ui/Button';
import { toast } from 'sonner';
import RadioImages from '@/lib/components/form/RadioImages';

// * Data
const avatarImages = [
  '/static/icons/avatars/bear.png',
  '/static/icons/avatars/bird.png',
  '/static/icons/avatars/cat.png',
  '/static/icons/avatars/dog.png',
  '/static/icons/avatars/dolphin.png',
  '/static/icons/avatars/elephant.png',
  '/static/icons/avatars/fox.png',
  '/static/icons/avatars/koala.png',
  '/static/icons/avatars/lion.png',
  '/static/icons/avatars/monkey.png',
  '/static/icons/avatars/panda.png',
  '/static/icons/avatars/penguin.png',
  '/static/icons/avatars/sheep.png',
  '/static/icons/avatars/tiger.png',
  '/static/icons/avatars/turtle.png',
  '/static/icons/avatars/wolf.png',
];

// * Component
export default function OnboardingPreferencesForm() {
  // * Hooks
  const { theme, setTheme } = useTheme();
  const { avatarUrl, setAvatarUrl, next } = useOnboarding();

  // * Handlers
  const handleSavePreferences = () => {
    console.log('works:');
  };

  // * Render
  return (
    <Form onSubmit={handleSavePreferences}>
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
  );
}
