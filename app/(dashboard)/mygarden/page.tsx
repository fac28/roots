import MonthDropdown from '@/components/MonthDropdown';
import TaskList from '@/components/TaskList';
import WhatsGrowing from '@/components/WhatsGrowing';
import Image from 'next/image';

const MyGarden = ({ searchParams }: { searchParams: { month: string } }) => {
  return (
    <>
      <div>
        <MonthDropdown searchParams={searchParams} />
        <Image
          src='/images/pumpkin.jpg'
          alt='Autum image'
          width={350}
          height={200}
          className='overflow-hidden w-full noimage'
        />
        <TaskList searchParams={searchParams} />
        <WhatsGrowing />
      </div>
    </>
  );
};

export default MyGarden;
