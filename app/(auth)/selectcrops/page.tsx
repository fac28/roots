import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const SelectCrops = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from('veg').select('name');

  if (error) {
    console.error(error);
    return;
  }

  const vegOptions = data.name;

  return (
    <div>
      <h2>Please select your first crops</h2>
      <form></form>
    </div>
  );
};

export default SelectCrops;
