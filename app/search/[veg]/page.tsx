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

const IndividualVegPage = async ({ params }: { params: Params }) => {
  const searchTerm = params.veg;

  const veggieResult = await filterByVeggie(searchTerm);

  return (
    <>
      <h2>Page for {veggieResult[0].name}</h2>
      <p>{veggieResult[0].description}</p>
    </>
  );
};

export default IndividualVegPage;
