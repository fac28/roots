import { AiOutlinePlus } from 'react-icons/ai';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';
import CustomCheckbox from '@/components/TaskCheckbox';
const TaskList = async () => {
  const userId = 6;
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
            <CustomCheckbox initialState={userTasks.checkedList[index]} />
            {userTasks.vegNames[index]} - {task}
          </li>
        ))}
      </ul>
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
};

export default TaskList;
