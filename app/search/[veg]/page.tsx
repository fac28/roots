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
      <>
        <img
          src={unsplashImage.urls.small}
          alt={unsplashImage.alt_description}
        />

        <h2>Page for {veggieResult[0].name}</h2>
        <p>{veggieResult[0].description}</p>
      </>
    );
  } else {
    return <div>Error fetching image.</div>;
  }
};

export default IndividualVegPage;
