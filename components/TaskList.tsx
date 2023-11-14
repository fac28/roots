import { AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';
import CustomCheckbox from '@/components/TaskCheckbox';
// import { fetchMonthsForUserVegetables } from '@/utils/supabase/models/returnVegMonths';

const TaskList = async () => {
  const userTasks = await filterByUserTasks();
  // const vegMonth = (await fetchMonthsForUserVegetables()) || [];

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

  const monthToDisplay = 5; //hard coded, need to make this number equal to the value from the drop dowm list or URL

  return (
    <div className='flex flex-col gap-4 items-center mt-3'>
      <div className='flex gap-3'>
        <h2 className=''>Task Summary</h2>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <ul>
        {userTasks?.taskShortList.map((task, index) => {
          if (userTasks.taskMonth[index].includes(monthToDisplay)) {
            return (
              <li
                className={
                  userTasks.taskMonth[index]
                    .map((number: any) => `_${number}`)
                    .join(' ') + ' flex items-center gap-5 mt-2'
                }
                key={index}
              >
                <CustomCheckbox initialState={userTasks.checkedList[index]} />
                {userTasks.vegNames[index]} - {task}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
};

export default TaskList;
