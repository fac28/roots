import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getUser } from './getUser';
import { getVegNameById } from './getVegNameById';

export async function filterByUserTasks(): Promise<{
  taskShortList: string[];
  checkedList: boolean[];
  vegNames: string[];
} | null> {
  const supabase = createServerComponentClient({ cookies });
  const user = await getUser(supabase);

  if (!user) {
    console.error('No user found.');
    return null;
  }

  try {
    if (user === null) {
      return null;
    }
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
