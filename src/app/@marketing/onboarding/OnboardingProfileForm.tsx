import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

// * Props
interface IProps {
  next: () => void;
}

// * Component
export default function OnboardingProfileForm({ next }: IProps) {
  // * State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // * Handlers
  const handleSaveProfile = () => {
    console.log('works:');
    next();
  };

  // * Render
  return (
    <Form onSubmit={handleSaveProfile}>
      {/* Name */}
      <Input
        label="Name"
        value={name}
        setValue={setName}
        placeholder="Suzy Smartz"
        Icon={UserIcon}
        required
      />

      {/* Email */}
      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        placeholder="homeschool.suzy@gmail.com"
        Icon={EnvelopeIcon}
        required
      />
    </Form>
  );
}
