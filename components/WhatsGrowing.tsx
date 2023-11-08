import fetchVegetableIdsForUser from '@/utils/supabase/models/userVeg';

async function WhatsGrowing() {
  const userVeg = await fetchVegetableIdsForUser();

  console.log(userVeg);

  return (
    <>
      <div className='flex justify-between items-center mt-1 '>
        <h1 className='text-lg ml-1'>What's growing:</h1>
        <button className='bg-primaryLight shadow hover:bg-bitterRed text-primaryDark hover:text-primaryLight font-bold py-2 px-4 rounded inline-flex items-center transition duration-200 ease-in-out transform active:translate-y-1 active:shadow-inner'>
          Edit
        </button>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4 p-4'>
        {userVeg.map((veg) => (
          <div className='w-10 h-10 shadow' key={veg}>
            {veg}
          </div>
        ))}
      </div>
    </>
  );
}

{
  /* <div className="flex flex-wrap justify-center items-center gap-4 p-4">
{userVeg.map((veg) => (
  <div key={veg} className="bg-white p-4 rounded shadow-md text-center"> */
}

export default WhatsGrowing;
