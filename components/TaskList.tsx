import { AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';

// const tasks = ['Task item one', 'Task item two', 'Task item 3'];

const TaskList = async () => {
  const userId = 1;
  const userTasks = await filterByUserTasks(userId);

  if (!userTasks?.taskShortList || userTasks.taskShortList.length === 0) {
    return (
      <div className='flex flex-col gap-4 items-center mt-3'>
        <div className='flex gap-3'>
          <h2 className=''>Task Summary</h2>
          <button>
            <AiOutlinePlus />
          </button>
        </div>
        <p>No tasks found for this user.</p>
        <div className='bg-slate-300 h-3 w-full'></div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 items-center mt-3'>
      <div className='flex gap-3'>
        <h2 className=''>Task Summary</h2>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <ul>
        {userTasks?.taskShortList.map((task, index) => (
          <li className='flex items-center gap-5 mt-2' key={index}>
            {userTasks.checkedList[index] ? (
              <ImCheckboxChecked />
            ) : (
              <ImCheckboxUnchecked />
            )}
            {task}
          </li>
        ))}
      </ul>
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
  // .then((tasks) => {
  //   console.log('Tasks for user', userId, ':', tasks);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
};
// !!! userID needs updating to be the actual authenticated user
// const userId = 1;
// const userTasks = await filterByUserTasks(userId);
// console.log(userTasks);
// console.log(JSON.stringify(userTasks, null, 2));

// return (
//   <div className='flex flex-col gap-4 items-center mt-3'>
//     <div className='flex gap-3'>
//       <h2 className=''>Task Summary</h2>
//       <button>
//         <AiOutlinePlus />
//       </button>
//     </div>
//     <ul>
//       {userTasks.map((task, index) => (
//         <li className='flex items-center gap-5 mt-2' key={index}>
//           {/* {task.checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} */}
//           {task.veg_tasks.tasks.task_short}
//         </li>
//       ))}
//     </ul>
//     <div className='bg-slate-300 h-3 w-full'></div>
//   </div>
// );

export default TaskList;
