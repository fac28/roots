import { AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

const tasks = ['Task item one', 'Task item two', 'Task item 3'];

const TaskList = () => {
  return (
    <div className='flex flex-col gap-4 items-center mt-3'>
      <div className='flex gap-3'>
        <h2 className=''>Task Summary</h2>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li className='flex items-center gap-5 mt-2' key={index}>
              <ImCheckboxUnchecked />
              {item}
            </li>
          );
        })}
      </ul>
      <div className='bg-slate-300 h-3 w-full'></div>
    </div>
  );
};

export default TaskList;
