import MarketingNavAuthSuccessModal from '@/app/@marketing/(navigation)/MarketingNavAuthSuccessModal';
import { useOnboarding } from '@/app/@marketing/onboarding/OnboardingCtx';
import AuthDividerMessage from '@/lib/auth/AuthDividerMessage';
import AuthHeader from '@/lib/auth/AuthHeader';
import AuthProviderButtons from '@/lib/auth/AuthProviderButtons';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function CurriculumRoadmapAuthModal({ isOpen, close }: IProps) {
  // * Contexts
  const { name, setName, email, setEmail, next, loading } = useOnboarding();
  const pathname = usePathname(); // Pathname for redirecting after sign in

  // * State
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInEmail, setSignInEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
        email: signInEmail,
        redirectUrl: '/curriculum-roadmaps',
      }),
    });

    if (res.ok) {
      toast.success('Check your email for a sign in link!');
      close();
      setIsSuccessModalOpen(true);
    } else {
      toast.error("We couldn't sign you in. Please try again.");
    }

    setIsLoading(false);
  };

  // Sign Up Next Step
  const onNextStep = () => {
    if (!name || !email) return toast.error('Please fill out all fields'); // Ensure all fields are filled out

    // Ensure email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error('Please enter a valid email address');

    next(); // Go to next step
  };

  // * Render
  return (
    <>
      <Modal
        isVisible={isOpen}
        close={close}
        noCloseOnOutsideClick={true}
        closeBtn={true}
      >
        <AuthHeader isSignIn={isSignIn} toggle={() => setIsSignIn(!isSignIn)} />

        {/* Sign Up / In Forms */}
        {!isSignIn ? (
          <Form className="lg:grid-cols-2">
            {/* Name */}
            <Input
              label="Name"
              value={name}
              setValue={setName}
              placeholder="Suzy Smartz"
              icon={UserIcon}
              autoFocus={true}
              required={true}
            />

            {/* Email */}
            <Input
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="homeschool.suzy@gmail.com"
              icon={EnvelopeIcon}
              required={true}
            />

            {/* Submit */}
            <Button
              className="col-span-2"
              type="button"
              disabled={!name || !email}
              onClick={onNextStep}
              loading={loading}
            >
              Let&apos;s Try It <span className="ml-2">⭐️</span>
            </Button>
          </Form>
        ) : (
          <Form onSubmit={handleSignIn}>
            {/* Email */}
            <Input
              cols={4}
              label="Email"
              type="email"
              placeholder="homeschoolmom@gmail.com"
              value={signInEmail}
              setValue={setSignInEmail}
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
        )}

        {isSignIn && (
          <>
            <AuthDividerMessage />
            <AuthProviderButtons />
          </>
        )}
      </Modal>

      {/* Sign In Success Modal */}
      <MarketingNavAuthSuccessModal
        isOpen={isSuccessModalOpen}
        close={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
}
