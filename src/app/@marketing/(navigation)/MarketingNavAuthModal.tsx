import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { signInUserWithEmail } from './_actions';
import { toast } from 'sonner';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

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
  const { mutate, isLoading } = useRequest(signInUserWithEmail, {
    onSuccess: (data) => {
      console.log('data:', data);
      if (data.ok) {
        close();
        toast.success('Check your email for a sign in link!');
        openSuccess();
      }
    },
    onError: (error) => toast.error(error),
  });

  // * State
  const [email, setEmail] = useState('');

  // * Render
  return (
    <Modal size="xs" isVisible={isOpen} close={close} rounded="lg" shadow="lg">
      <Modal.Header
        title="Sign In"
        image="/static/icons/brand/favicon_512x512.png"
      />

      <Form>
        {/* Email */}
        <Input
          cols={3}
          label="Email"
          type="email"
          placeholder="homeschoolmom@gmail.com"
          value={email}
          setValue={setEmail}
          icon={UserIcon}
          initialFocus={true}
          tabIndex={0}
        />
      </Form>

      <Button
        size="md"
        fill="gradient"
        shadow="md"
        rounded="lg"
        loading={isLoading}
        className="w-full"
        onClick={() => mutate({ email })}
      >
        Time to Homeschool <span className="ml-2">😊</span>
      </Button>
    </Modal>
  );
}
