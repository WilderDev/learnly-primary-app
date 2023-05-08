// * Imports
import Button from '@/lib/components/ui/Button';

// * Component
export default function MarketingNavCTA() {
  // * Render
  return (
    <Button
      size="md"
      fill="gradient"
      effect="scale"
      shadow="md"
      rounded="lg"
      url="/onboarding"
    >
      <span className="mr-2">👉</span> Start My Free Trial
    </Button>
  );
}
