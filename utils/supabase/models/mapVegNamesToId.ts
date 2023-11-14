import { fetchIdByVegName } from './fetchIdByVegName';

// Maps an array of vegetable IDs to their names.
export async function mapVegNamesToId(
  supabase: any,
  vegNames: string[]
): Promise<(string | null)[]> {
  return Promise.all(
    vegNames.map((vegName) => fetchIdByVegName(supabase, vegName))
  );
}
