import Form from '@/lib/components/form/Form';

// * Component
export default function OnboardingChildrenForm() {
  // * Handlers
  const handleSaveChildren = () => {
    console.log('works:');
  };

  // * Render
  return (
    <Form onSubmit={handleSaveChildren}>
      {/* Child */}
      {/* <Input label="Child" /> */}
    </Form>
  );
}
