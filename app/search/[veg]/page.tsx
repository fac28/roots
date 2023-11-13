import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie';
import { fetchUnsplashImage } from '@/utils/supabase/models/fetchUnsplashImage';
type Params = {
  veg: string;
};

const IndividualVegPage = async ({ params }: { params: Params }) => {
  const searchTerm = params.veg;
  const veggieResult = await filterByVeggie(searchTerm);
  const unsplashImage = await fetchUnsplashImage(searchTerm);

  if (unsplashImage) {
    return (
      <div className='bg-red-500 p-12 mx-48 child:bg-red-100'>
        <h2 className='text-4xl text-center'>{veggieResult[0].name}</h2>
        <img
          src={unsplashImage.urls.small}
          alt={unsplashImage.alt_description}
        />

        <p>{veggieResult[0].description}</p>
      </div>
    );
  } else {
    return <div>Error fetching image.</div>;
  }
};

export default IndividualVegPage;
