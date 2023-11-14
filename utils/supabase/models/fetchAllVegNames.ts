import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const fetchAllVegNames = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from('veg').select('id, name');

  if (error) {
    throw new Error(error.message);
  }

  return data.map((veg) => ({
    id: veg.id,
    name: veg.name,
  }));
};

export default fetchAllVegNames;
