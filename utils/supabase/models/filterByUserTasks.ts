import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function filterByUserTasks(
  userId: number
): Promise<string[] | null> {
  try {
    // Execute the SQL query to get user tasks
    const { data: userTasks, error: userTasksError } = await supabase
      .from('user_tasks')
      .select('task')
      .eq('user_id', userId);

    if (userTasksError) {
      throw userTasksError;
    }

    // Extract task IDs
    const taskIds: number[] = userTasks.map((row: any) => row.task);

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

    return taskShortList;
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    throw error;
  }
}