import { SearchBar } from '@/components/SearchBar';
import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie';

export default function Page() {
  return (
    <div className='w-full h-screen bg-primaryGreen'>
      <SearchBar />
    </div>
  );
}
