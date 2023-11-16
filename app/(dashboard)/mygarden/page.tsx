import MonthDropdown from '@/components/MonthDropdown';
import TaskList from '@/components/TaskList';
import WhatsGrowing from '@/components/WhatsGrowing';
import Image from 'next/image';

const MyGarden = ({ searchParams }: { searchParams: { month: string } }) => {
  return (
    <>
      <div className='md:grid md:grid-cols-2 md:gap-10 md:justify-center'>
        <div>
          <div className='image-wrapper flex justify-center'>
            <div>
              <MonthDropdown searchParams={searchParams} />
            </div>
            <Image
              src='/images/pumpkin.jpg'
              alt='Autum image'
              width={500}
              height={400}
              className='square-img'
            />
          </div>
        </div>
        <TaskList searchParams={searchParams} />
        <WhatsGrowing />
      </div>
    </>
  );
};

export default MyGarden;
