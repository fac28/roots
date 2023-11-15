import Carousel from '@/components/Carousel/Carousel';
import { SearchBar } from '@/components/SearchBar';

export default function Index() {
  return (
    <>
      <div className='flex justify-center w-full'>
        {' '}
        {/* Container to center the content */}
        <section
          className='w-full relative  bg-local ...' // Set width to 80% (4/5)
          style={{
            backgroundImage: `url('../images/main-background.jpg')`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <section className='min-h-screen flex flex-col items-center'>
            <SearchBar />
          </section>
        </section>
      </div>
      <Carousel />
    </>
  );
}
