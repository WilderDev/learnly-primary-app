import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { toast } from 'sonner';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
  openSuccess: () => void;
}

// * Component
export default function MarketingNavAuthModal({
  isOpen,
  close,
  openSuccess,
}: IProps) {
  // * Hooks
  const pathname = usePathname(); // Pathname for redirecting after sign in

  // * State
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // * Handlers
  // Sign In
  const handleSignIn = async () => {
    setIsLoading(true);

    const res = await fetch('/api/users/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        redirectUrl: pathname.includes('curriculum-roadmaps')
          ? '/curriculum-roadmaps'
          : pathname,
      }),
    });

    if (res.ok) {
      toast.success('Check your email for a sign in link!');
      close();
      openSuccess();
    } else {
      toast.error("We couldn't sign you in. Please try again.");
    }

    setIsLoading(false);
  };

  // * Render
  return (
    <Modal size="xs" isVisible={isOpen} close={close} rounded="lg" shadow="lg">
      <Modal.Header
        title="Sign In"
        image="/static/icons/brand/favicon_512x512.png"
      />

      <Form onSubmit={handleSignIn}>
        {/* Email */}
        <Input
          cols={4}
          label="Email"
          type="email"
          placeholder="homeschoolmom@gmail.com"
          value={email}
          setValue={setEmail}
          icon={UserIcon}
          autoFocus={true}
          tabIndex={0}
        />

        <Button
          size="md"
          fill="gradient"
          shadow="md"
          rounded="lg"
          loading={isLoading}
          className="w-full col-span-4"
          type="submit"
        >
          Time to Homeschool <span className="ml-2">😊</span>
        </Button>
      </Form>
    </Modal>
  );
}
