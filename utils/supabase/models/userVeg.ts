import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { VegIdObject } from '../types/globalTypes';
import { handleError } from './handleError';
import { mapVegIdsToNames } from './mapVegIdsToNames';
import { getUser } from './getUser';

// Fetches the IDs of vegetables associated with the user from the 'user_veg' table.
export async function fetchUserVegIds(
  supabase: any,
  userId: number
): Promise<number[]> {
  const { data, error } = await supabase
    .from('user_veg')
    .select('veg_id')
    .eq('user_id', userId);

  if (error) {
    handleError('fetching vegetable ids', error);
    return [];
  }
  return data.map((veg: VegIdObject) => veg.veg_id);
}

// The main function to fetch vegetable names for a user.
export default async function fetchVegetableNamesForUser() {
  const supabase = createServerComponentClient({ cookies });
  const user = await getUser(supabase);

  if (user) {
    const vegIds = await fetchUserVegIds(supabase, user.id);
    return mapVegIdsToNames(supabase, vegIds);
  } else {
    console.error('User not found or not authenticated.');
    return [];
  }
}
