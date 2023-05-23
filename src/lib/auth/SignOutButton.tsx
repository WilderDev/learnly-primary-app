import cn from '../common/cn';
import { useAuth } from '../components/providers/AuthProvider';
import Button from '../components/ui/Button';

// * Props
interface IProps {
  className?: string;
}

// * Component
export default function SignOutButton({ className }: IProps) {
  // * Hooks / Context
  const { supabase } = useAuth();

  // * Render
  return (
    <Button
      variant="dark"
      className={cn(className)}
      onClick={() => supabase.auth.signOut()}
    >
      Sign Out
    </Button>
  );
}
