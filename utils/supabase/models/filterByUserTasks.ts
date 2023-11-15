import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getUser } from './getUser';
import { fetchMonthsForUserVegetables } from './returnVegMonths';
import { getVegNamesByIds } from './getVegNamesByIds';

export async function filterByUserTasks(): Promise<{
  taskShortList: string[];
  checkedList: boolean[];
  vegNames: string[];
  taskMonth: any;
} | null> {
  const supabase = createServerComponentClient({ cookies });
  const user = await getUser(supabase);

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
    const taskMonth = (await fetchMonthsForUserVegetables()).flat();

    const { data: tasksData, error: tasksError } = await supabase
      .from('tasks')
      .select('id, task_short')
      .in('id', taskIds);

    if (tasksError) {
      throw tasksError;
    }

    if (tasksData) {
      for (const task of tasksData) {
        taskShortList.push(task.task_short);
      }
    }
    const vegNamesMap = await getVegNamesByIds(linkedVeg);
    for (const vegId of linkedVeg) {
      const vegName = vegNamesMap[vegId] || 'Unknown';
      vegNames.push(vegName);
    }

    return { taskShortList, checkedList, vegNames, taskMonth };
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    throw error;
  }
}
