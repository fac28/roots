import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

type UserTasksResults = {
  id: number;
  user_id: number;
  veg_id: number;
  task: number;
  checked: boolean;
};

export const filterByUserTasks = async (
  logged_in_user_id: number
): Promise<UserTasksResults[]> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from('user_tasks')
    .select()
    .eq('user_id', logged_in_user_id);
  return data || [];
};
