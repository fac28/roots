import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { User } from '../types/globalTypes';
import { VegIdObject } from '../types/globalTypes';
import { handleError } from './handleError';
import { mapVegIdsToNames } from './mapVegIdsToNames';

// I'm just simulating a user here, but when we have proper auth we can just check the logged in user.
function getUser(): User {
  return {
    id: 1,
    name: 'Laurie',
  };
}

// Fetches the IDs of vegetables associated with the user from the 'user_veg' table.
async function fetchUserVegIds(
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
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = getUser();

  const vegIds = await fetchUserVegIds(supabase, user.id);
  return mapVegIdsToNames(supabase, vegIds);
}
