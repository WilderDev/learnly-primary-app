import { Database } from '@/assets/typescript/db';

// * Props
interface IProps {
  name: string;
  avatarUrl: string;
  type: Database['public']['Enums']['profile_type'];
  status: Database['public']['Enums']['profile_status'];
}

// * Component
export default function PublicProfileDetails({
  name,
  avatarUrl,
  type,
  status,
}: IProps) {
  // * Render
  return (
    <>
      {/*  */}
      <h1></h1>
    </>
  );
}
