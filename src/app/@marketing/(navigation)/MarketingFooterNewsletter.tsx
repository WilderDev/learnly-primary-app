'use client';

import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useRequest } from '@/lib/hooks/useRequest';
import { newsletterSignUp } from './_actions';
import Button from '@/lib/components/ui/Button';

export default function MarketingFooterNewsletter() {
  // * State
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(newsletterSignUp, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success(data.payload);
        setIsSubscribed(true);
      } else {
        toast.error(data.payload);
      }
    },
  });

  return (
    <>
      {!isSubscribed ? (
        <>
          {/* Newsletter Form */}
          <Form
            className="md:flex md:items-center space-y-3 sm:space-y-0 sm:flex-row gap-y-0"
            action={() => mutate({ email })}
          >
            {/* Email Input */}
            <Input
              value={email}
              setValue={setEmail}
              label="email"
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              icon={EnvelopeIcon}
              labelHidden={true}
              required
            />

            {/* Submit */}
            <Button
              type="submit"
              loading={isLoading}
              disabled={!email || isLoading}
            >
              {/* Large Screen Text */}
              <span className="hidden lg:inline">
                {isLoading ? 'Joining...' : 'Join'} our ABC Homeschool
                Newsletter
              </span>

              {/* Small Screen Text */}
              <span className="lg:hidden">
                {isLoading ? 'Joining...' : 'Join'} newsletter
              </span>
            </Button>
          </Form>
        </>
      ) : (
        <>
          {/* Success Messsage */}
          <p className="text-base font-semibold text-slate-900 dark:text-navy-50">
            <span className="absolute inset-0 sm:rounded-2xl" />
            Thank you for subscribing!
          </p>
        </>
      )}
    </>
  );
}
