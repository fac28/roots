import { handleError } from './handleError';

// Fetches the name of a vegetable given its ID.
export async function fetchVegNameById(
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
