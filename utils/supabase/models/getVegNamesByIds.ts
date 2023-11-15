// getVegNamesByIds.ts
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getVegNamesByIds(
  vegIds: number[]
): Promise<{ [id: number]: string }> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from('veg')
    .select('id, name')
    .in('id', vegIds);

  if (error) {
    throw error;
  }

  const vegNamesMap: string[] = [];
  if (data) {
    data.forEach((veg) => {
      vegNamesMap[veg.id] = veg.name;
    });
  }

  return vegNamesMap;
}
