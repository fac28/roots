import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie';

type Params = {
  veg: string;
};

type VeggieResults = {
  name: string;
  sow_in: number[];
  sow_dir: number[];
  companion: string[];
  harvest: number;
  description: string;
};

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const IndividualVegPage = async ({ params }: { params: Params }) => {
  const searchTerm = params.veg;

  const veggieResult = await filterByVeggie(searchTerm);

  try {
    const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${accessKey}&per_page=1`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: UnsplashApiResponse = await response.json();
    return (
      <>
        <img
          src={data.results[0].urls.small}
          alt={data.results[0].alt_description}
        />
        <h2>Page for {veggieResult[0].name}</h2>
        <p>{veggieResult[0].description}</p>
      </>
    );
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

export default IndividualVegPage;
