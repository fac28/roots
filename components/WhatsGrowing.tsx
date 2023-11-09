import fetchVegetableNamesForUser from '@/utils/supabase/models/userVeg';

async function WhatsGrowing() {
  const userVeg = await fetchVegetableNamesForUser();

  console.log(userVeg);

  return (
    <>
      <div className='flex justify-between items-center mt-1 '>
        <h1 className='text-lg ml-1'>What's growing:</h1>
        <button className='bg-primaryLight shadow hover:bg-bitterRed text-primaryDark hover:text-primaryLight font-bold py-1 px-2 rounded inline-flex items-center transition duration-200 ease-in-out transform active:translate-y-1 active:shadow-inner'>
          Edit
        </button>
      </div>
      <div className='max-w-sm md:max-w-md grid grid-flow-col auto-cols-max overflow-x-auto gap-4 p-4'>
        {userVeg.map((veg) => (
          <a href={`/search/${veg}`} key={veg}>
            <div
              className='bg-primaryLight text-xs w-16 h-16 md:w-24 md:h-24 md:text-base shadow text-center pt-2'
              key={veg}
            >
              {veg}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default WhatsGrowing;
