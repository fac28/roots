import { handleError } from './handleError';

// Fetches the id of a vegetable given its name.
export async function fetchIdByVegName(
  supabase: any,
  vegId: number
): Promise<string | null> {
  const { data, error } = await supabase
    .from('veg')
    .select('id')
    .eq('name', vegId);

  if (error) {
    handleError('fetching vegetable id', error);
    return null;
  }

  return data[0]?.name || null;
}
