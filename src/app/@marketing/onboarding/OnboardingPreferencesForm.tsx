'use client';

import Form from '@/lib/components/form/Form';

// * Component
export default function OnboardingPreferencesForm() {
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
    </Form>
  );
}
