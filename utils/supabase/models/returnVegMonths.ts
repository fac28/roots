import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { handleError, getUser } from './userVeg';
import { fetchUserVegIds } from './userVeg';

// Fetches the months (as numbers) for a given vegetable ID.
async function fetchMonthsForVegId(supabase: any, vegId: number) {
  const { data, error } = await supabase
    .from('veg_tasks')
    .select('month, task_id')
    .eq('veg_id', vegId);

  // console.log(data);

  if (error) {
    handleError('fetching months for vegetable', error);
    return [];
  }

  // Assuming each entry in the data array contains a month array with numbers
  return data.map((item: any) => item.month);
}

// Maps vegetable IDs to their corresponding months.
async function mapVegIdsToMonths(supabase: any, vegIds: any) {
  return Promise.all(
    vegIds.map((vegId: any) => fetchMonthsForVegId(supabase, vegId))
  );
}

// The main function to fetch months for a user's vegetables.
export async function fetchMonthsForUserVegetables() {
  const supabase = createServerComponentClient({ cookies });
  const user = await getUser(supabase);

  if (user) {
    const vegIds = await fetchUserVegIds(supabase, user.id);
    return mapVegIdsToMonths(supabase, vegIds);
  } else {
    console.error('User not found or not authenticated.');
    return [];
  }
}
