import { AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';

// const tasks = ['Task item one', 'Task item two', 'Task item 3'];

const TaskList = async () => {
  // !!! userID needs updating to be the actual authenticated user
  const userId = 1;
  const userTasks = await filterByUserTasks(userId);
  // console.log(userTasks);
  return (
    <div className='flex flex-col gap-4 items-center mt-3'>
      <div className='flex gap-3'>
        <h2 className=''>Task Summary</h2>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <ul>
        {userTasks.map((task) => (
          <li className='flex items-center gap-5 mt-2' key={task.id}>
            {task.checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            {task.task}
          </li>
        ))}
      </ul>
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
};

export default TaskList;
