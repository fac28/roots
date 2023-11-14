import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getVegNameById(vegId: number): Promise<string | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from('veg')
    .select('name')
    .eq('id', vegId);

  if (error) {
    throw error;
  }

  if (data && data.length > 0) {
    return data[0].name;
  }

  return null;
}
