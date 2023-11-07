import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

type VeggieResults = {
  name: string;
  sow_in: number[];
  sow_dir: number[];
  companion: string[];
  harvest: number;
  description: string;
};

export const filterByVeggie = async (
  veggie: string
): Promise<VeggieResults[]> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.from('veg').select().eq('name', veggie);
  return data || [];
};
