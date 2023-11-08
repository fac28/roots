import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { User } from '../types/globalTypes';
import { VegIdObject } from '../types/globalTypes';

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

// Fetches the name of a vegetable given its ID.
async function fetchVegNameById(
  supabase: any,
  vegId: number
): Promise<string | null> {
  const { data, error } = await supabase
    .from('veg')
    .select('name')
    .eq('id', vegId);

  if (error) {
    handleError('fetching vegetable name', error);
    return null;
  }

  return data[0]?.name || null;
}

// Maps an array of vegetable IDs to their names.
async function mapVegIdsToNames(
  supabase: any,
  vegIds: number[]
): Promise<(string | null)[]> {
  return Promise.all(vegIds.map((vegId) => fetchVegNameById(supabase, vegId)));
}

// Handles errors by logging them to the console.
function handleError(context: string, error: any): void {
  console.error(`Error ${context}:`, error.message);
}

// The main function to fetch vegetable names for a user.
export default async function fetchVegetableIdsForUser() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = getUser();

  const vegIds = await fetchUserVegIds(supabase, user.id);
  return mapVegIdsToNames(supabase, vegIds);
}
