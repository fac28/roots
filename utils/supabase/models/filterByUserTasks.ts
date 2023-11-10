import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function filterByUserTasks(
  userId: number
): Promise<{ taskShortList: string[]; checkedList: boolean[] } | null> {
  try {
    // Execute the SQL query to get user tasks
    const { data: userTasks, error: userTasksError } = await supabase
      .from('user_tasks')
      .select('task, checked')
      .eq('user_id', userId);

    if (userTasksError) {
      throw userTasksError;
    }

    // Extract task IDs
    const taskIds: number[] = userTasks.map((row: any) => row.task);
    const checkedList: boolean[] = userTasks.map((row: any) => row.checked);

    // Retrieve task_short values one by one for each task ID
    const taskShortList: string[] = [];
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

    return { taskShortList, checkedList };
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    throw error;
  }
}
