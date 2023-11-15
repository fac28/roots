import { AiOutlinePlus } from 'react-icons/ai';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';
import CustomCheckbox from '@/components/TaskCheckbox';
import getMonthNumber from '@/utils/supabase/models/returnMonthAsNumber';

type TaskListProps = {
  searchParams: { month: string };
};

const TaskList = async ({ searchParams }: TaskListProps) => {
  // console.log(searchParams)
  const userTasks = await filterByUserTasks();
  const monthToDisplay = getMonthNumber(searchParams.month);

  return (
    <div className='flex flex-col gap-4 items-center mt-44 md:mt-4'>
      <div className='flex gap-3'>
        <h2 className=''>Task Summary</h2>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      {!userTasks?.taskShortList || userTasks.taskShortList.length === 0 ? (
        <p>No tasks found for this user.</p>
      ) : (
        <ul>
          {userTasks?.taskShortList.map((task, index) => {
            if (userTasks.taskMonth[index].includes(monthToDisplay)) {
              return (
                <li
                  className={
                    userTasks.taskMonth[index]
                      .map((number: number) => `_${number}`)
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
      )}
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
};

export default TaskList;
