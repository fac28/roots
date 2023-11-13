import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie';
import { fetchUnsplashImage } from '@/utils/supabase/models/fetchUnsplashImage';
import Image from 'next/image';

type Params = {
  veg: string;
};

const IndividualVegPage = async ({ params }: { params: Params }) => {
  const searchTerm = params.veg;
  const veggieResult = await filterByVeggie(searchTerm);
  const unsplashImage = await fetchUnsplashImage(searchTerm);

  if (unsplashImage) {
    return (
      <>
        <img
          src={unsplashImage.urls.full}
          alt={unsplashImage.alt_description}
          className='w-full aspect-thin object-cover'
        />

        <div className='max-w-2xl p-12 mx-48  flex flex-wrap flex-col gap-12 items-center'>
          <h2 className='text-5xl text-center font-medium'>
            {veggieResult[0].name}
          </h2>
          {/* <img
            src={unsplashImage.urls.full}
            alt={unsplashImage.alt_description}
            className='aspect-square object-cover'
          /> */}

          <p className='italic'>{veggieResult[0].description}</p>
          <h3 className='text-left text-2xl'>Companion plants:</h3>

          <div className='flex flex-nowrap gap-10'>
            {veggieResult[0].companion.map(
              (companion, index) =>
                companion && (
                  <a href={`/search/${companion}`} key={index}>
                    <div className='flex flex-col items-center bg-primaryLight text-xs w-16 h-16 md:w-24 md:h-24 md:text-base shadow text-center pt-2'>
                      <p>{companion}</p>
                      <Image
                        src={`/images/icons/${companion.toLowerCase()}.png`}
                        alt={`${companion} image`}
                        width={32}
                        height={32}
                        className='md:pt-2'
                      />
                    </div>
                  </a>
                )
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <div>Error fetching image.</div>;
  }
};

export default IndividualVegPage;
