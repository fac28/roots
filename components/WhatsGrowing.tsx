import fetchVegetableNamesForUser from '@/utils/supabase/models/userVeg';
import Image from 'next/image';
import VegLinksList from './VegLinksList';

async function WhatsGrowing() {
  const userVeg = (await fetchVegetableNamesForUser()) || [];

  return (
    <div className='col-span-full px-5'>
      <div className='flex justify-between items-center mt-1 '>
        <h1 className='text-lg ml-1'>What's growing:</h1>
        <button className='bg-primaryLight shadow hover:bg-bitterRed text-primaryDark hover:text-primaryLight font-bold py-1 px-2 rounded inline-flex items-center transition duration-200 ease-in-out transform active:translate-y-1 active:shadow-inner'>
          Edit
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-4 p-4 mb-24'>
        <VegLinksList userVeg={userVeg} />
      </div>
    </div>
  );
}

export default WhatsGrowing;
