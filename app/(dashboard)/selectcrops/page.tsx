import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import VegSelectButton from '@/components/VegSelectButton/VegSelectButton';

const SelectCrops = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from('veg').select('name');

  if (error) {
    console.error(error.message);
    return;
  }

  const vegOptions = data.map((row) => row.name);

  return (
    <>
      <h2>Please select your first crops:</h2>
      <div className='flex flex-wrap justify-center gap-2 mt-8 px-2'>
        {vegOptions.map((veg) => (
          <VegSelectButton veg={veg} />
        ))}{' '}
      </div>
      <button>Submit</button>
    </>
  );
};

export default SelectCrops;
