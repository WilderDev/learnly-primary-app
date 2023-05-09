'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';

// * Props
interface IProps {
  next: () => void;
}

// * Component
export default function OnboardingPreferencesForm({ next }: IProps) {
  // * Handlers
  const handleSavePreferences = () => {
    console.log('works:');
    next();
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
