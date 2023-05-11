'use client';

import CycleInput from '@/lib/components/form/CycleInputImage';
import Form from '@/lib/components/form/Form';
import { useTheme } from '@/lib/theme/ThemeCtx';

// * Component
export default function OnboardingPreferencesForm() {
  // * Hooks
  const { theme, setTheme } = useTheme();

  // * Handlers
  const handleSavePreferences = () => {
    console.log('works:');
  };

  // * Render
  return (
    <Form onSubmit={handleSavePreferences}>
      {/* Avatar */}
      {/* <Input label="Avatar" /> */}

      {/* Color Scheme */}
      {/* <Input label="Color Scheme" /> */}
      <CycleInput
        className="w-48"
        label="Color Scheme"
        value={theme}
        setValue={setTheme}
        options={[
          { value: 'light', image: '/static/icons/sun.png' },
          { value: 'dark', image: '/static/icons/moon.png' },
        ]}
      />
    </Form>
  );
}
