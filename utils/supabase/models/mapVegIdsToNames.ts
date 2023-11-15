import { fetchVegNameById } from './fetchVegNameById';

// Maps an array of vegetable IDs to their names.
export async function mapVegIdsToNames(
  supabase: any,
  vegIds: number[]
): Promise<(string | null)[]> {
  return Promise.all(vegIds.map((vegId) => fetchVegNameById(supabase, vegId)));
}
