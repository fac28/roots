import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

type Task = {
  task: number;
  veg_tasks: {
    task_id: number;
    tasks: {
      task_short: string;
    }[];
  }[];
};

type UserTasksResults = Task[];

export const filterByUserTasks = async (
  logged_in_user_id: number
): Promise<UserTasksResults> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let { data } = await supabase
    .from('user_tasks')
    .select(
      `
    task,
    veg_tasks!inner (
      task_id,
      tasks!inner (
        task_short
      )
    )
  `
    )
    .eq('user_id', logged_in_user_id);
  console.log(data);
  return data || [];
};

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
