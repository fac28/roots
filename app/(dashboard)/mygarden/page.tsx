import MonthDropdown from '@/components/MonthDropdown';
import TaskList from '@/components/TaskList';
import WhatsGrowing from '@/components/WhatsGrowing';
import Image from 'next/image';
import { Suspense } from 'react';
import LoadingComponent from '@/components/LoadingComponent';

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
          className='overflow-hidden w-full'
        />
        <Suspense fallback={<LoadingComponent />}>
          <TaskList searchParams={searchParams} />
        </Suspense>
        <WhatsGrowing />
      </div>
    </>
  );
};

export default MyGarden;
