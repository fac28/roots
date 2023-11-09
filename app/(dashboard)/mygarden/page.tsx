import MonthDropdown from '@/components/MonthDropdown';
import TaskList from '@/components/TaskList';
import WhatsGrowing from '@/components/WhatsGrowing';
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
          className='overflow-hidden md:w-full'
        />
        <TaskList />
        <WhatsGrowing />
      </div>
    </>
  );
};

export default MyGarden;
