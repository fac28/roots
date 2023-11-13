import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getUser } from './getUser';

async function getVegNameById(vegId: number): Promise<string | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from('veg')
    .select('name')
    .eq('id', vegId);

  if (error) {
    throw error;
  }

  if (data && data.length > 0) {
    return data[0].name;
  }

  return null;
}

export async function filterByUserTasks(): Promise<{
  taskShortList: string[];
  checkedList: boolean[];
  vegNames: string[];
} | null> {
  const supabase = createServerComponentClient({ cookies });
  const user = await getUser(supabase);
  try {
    const { data: userTasks, error: userTasksError } = await supabase
      .from('user_tasks')
      .select('task, checked, veg_id')
      .eq('user_id', user.id);

    if (userTasksError) {
      throw userTasksError;
    }

    const taskIds: number[] = userTasks.map((row: any) => row.task);
    const checkedList: boolean[] = userTasks.map((row: any) => row.checked);
    const linkedVeg: number[] = userTasks.map((row: any) => row.veg_id);

    const taskShortList: string[] = [];
    const vegNames: string[] = [];

    for (const taskId of taskIds) {
      const { data: taskData, error: taskError } = await supabase
        .from('tasks')
        .select('task_short')
        .eq('id', taskId);

      if (taskError) {
        throw taskError;
      }

      if (taskData && taskData.length > 0) {
        taskShortList.push(taskData[0].task_short);
      }
    }
    for (const vegId of linkedVeg) {
      const vegName = await getVegNameById(vegId);
      vegNames.push(vegName || 'Unknown');
    }

    return { taskShortList, checkedList, vegNames };
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    throw error;
  }
}
