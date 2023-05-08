import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';

// * Props
interface IProps {
  next: () => void;
}

// * Component
export default function OnboardingChildrenForm({ next }: IProps) {
  // * Handlers
  const handleSaveChildren = () => {
    console.log('works:');
    next();
  };

  // * Render
  return (
    <Form onSubmit={handleSaveChildren}>
      {/* Child */}
      {/* <Input label="Child" /> */}
    </Form>
  );
}
