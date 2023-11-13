import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { User, VegIdObject } from '../types/globalTypes';

export async function getUser(supabase: any): Promise<User | null> {
  const { data: sessionData } = await supabase.auth.getSession();
  if (sessionData?.session?.user?.id) {
    // Fetch the user ID based on the supabase_id from the session.
    const userResponse = await supabase
      .from('users')
      .select('id, name')
      .eq('supabase_id', sessionData.session.user.id);

    if (userResponse.data && userResponse.data.length > 0) {
      return {
        id: userResponse.data[0].id,
        name: userResponse.data[0].name,
      };
    }
  }
  return null;
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

async function mapVegIdsToNames(
  supabase: any,
  vegIds: number[]
): Promise<(string | null)[]> {
  return Promise.all(vegIds.map((vegId) => fetchVegNameById(supabase, vegId)));
}

function handleError(context: string, error: any): void {
  console.error(`Error ${context}:`, error.message);
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
