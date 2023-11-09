import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function filterByUserTasks(
  userId: number
): Promise<string[] | null> {
  try {
    // Execute the SQL query
    const { data: userTasks, error: userTasksError } = await supabase
      .from('user_tasks')
      .select('task')
      .eq('user_id', userId);

    if (userTasksError) {
      throw userTasksError;
    }

    // Extract task IDs
    const taskIds: number[] = userTasks.map((row: any) => row.task);
    console.log(taskIds);
    // Retrieve task_short values based on task IDs
    const { data: tasks, error: tasksError } = await supabase
      .from('tasks')
      .select('task_short')
      .in('id', taskIds);

    if (tasksError) {
      throw tasksError;
    }

    // Extract and return the task_short values as an array
    const taskShortList: string[] = tasks.map((row: any) => row.task_short);
    return taskShortList;
  } catch (error) {
    // Handle errors (e.g., log or return an error response)
    console.error('Error retrieving tasks:', error);
    throw error;
  }
}

// type Task = {
//   task: number;
//   veg_tasks: {
//     task_id: number;
//     tasks: {
//       task_short: string;
//     }[];
//   }[];
// };

// type UserTasksResults = Task[];

// export const filterByUserTasks = async (
//   logged_in_user_id: number
// ): Promise<UserTasksResults> => {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);
//   let { data } = await supabase
//     .from('user_tasks')
//     .select(
//       `
//     task,
//     veg_tasks!inner (
//       task_id,
//       tasks!inner (
//         task_short
//       )
//     )
//   `
//     )
//     .eq('user_id', logged_in_user_id);
//   console.log(data);
//   return data || [];
// };

// [
//   { task: 1, veg_tasks: { task_id: 1, tasks: [Object] } },
//   { task: 3, veg_tasks: { task_id: 3, tasks: [Object] } },
//   { task: 1, veg_tasks: { task_id: 1, tasks: [Object] } },
// ];

// [
//   {
//     task: 1,
//     veg_tasks: {
//       task_id: 1,
//       tasks: {
//         task_short: 'Sow Seeds Indoors',
//       },
//     },
//   },
//   {
//     task: 3,
//     veg_tasks: {
//       task_id: 3,
//       tasks: {
//         task_short: 'Install Supports',
//       },
//     },
//   },
//   {
//     task: 1,
//     veg_tasks: {
//       task_id: 1,
//       tasks: {
//         task_short: 'Sow Seeds Indoors',
//       },
//     },
//   },
// ];
