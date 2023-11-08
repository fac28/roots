import { SearchBar } from '@/components/SearchBar';
import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie';

export default function Page() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
