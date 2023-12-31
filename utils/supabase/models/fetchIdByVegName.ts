import { handleError } from './handleError';

// Fetches the id of a vegetable given its name.
export async function fetchIdByVegName(
  supabase: any,
  vegName: string
): Promise<string | null> {
  const { data, error } = await supabase
    .from('veg')
    .select('id')
    .eq('name', vegName);

  if (error) {
    handleError('fetching vegetable id', error);
    return null;
  }

  return data[0]?.id || null;
}
