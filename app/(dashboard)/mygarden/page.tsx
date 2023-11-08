import MonthDropdown from '@/components/MonthDropdown';
import TaskList from '@/components/TaskList';
import Image from 'next/image';

const MyGarden = () => {
  return (
    <>
      <div>
        <MonthDropdown />
        <Image
          src='/images/pumpkin.jpg'
          alt='Autum image'
          width={350}
          height={200}
          className='overflow-hidden'
        />
        <TaskList />
      </div>
    </>
  );
};

export default MyGarden;
