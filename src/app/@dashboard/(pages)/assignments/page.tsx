import { IAssignment } from '@/assets/typescript/assignment';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import Assignments from './Assignments';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function AssignmentsPage() {
  const assignments = await fetchAssignments();

  return <Assignments assignments={assignments} />;
}

export async function fetchAssignments(): Promise<IAssignment[]> {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data, error } = await supabase
      .from('assignments')
      .select(`*`)
      .eq('creator_id', user?.id);

    console.log(data);
    if (error) {
      throw new Error(error.message);
    }

    return data as IAssignment[];
  } else return [];
}
