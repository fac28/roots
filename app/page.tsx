import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';

export default async function Index() {
  return (
    <>
      <section
        className='w-full bg-local ...'
        style={{
          backgroundImage: `url('../images/main-background.jpg')`,
          backgroundSize: 'cover', // or 'contain' or '100% 100%' to adjust the zoom
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center', // Adjust as needed to position your image
        }}
      >
        <section className='min-h-screen flex flex-col items-center'>
          <Header />
          <SearchBar />
        </section>
      </section>
      <Carousel />
    </>
  );
}
