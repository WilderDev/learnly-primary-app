import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '@/lib/components/ui/Button';

// * Props
interface IProps {
  next: () => void;
}

// * Component
export default function OnboardingProfileForm({ next }: IProps) {
  // * State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  // * Handlers
  const handleSaveProfile = () => {
    console.log('works:');
    next();
  };

  // * Render
  return (
    <Form className="lg:grid-cols-2" onSubmit={handleSaveProfile}>
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

      {/* Submit */}
      <Button
        className="col-span-2"
        type="submit"
        disabled={!name || !email}
        loading={loading}
      >
        Next Step <span className="ml-2">🎉</span>
      </Button>
    </Form>
  );
}
