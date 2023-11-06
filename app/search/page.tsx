import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie'
import { Veggie } from '@/utils/supabase/types/globalTypes'

import { SearchBar } from '@/components/SearchBar'

export default async function Page() {
  
  const searchedVeggie: Veggie[] = await filterByVeggie('Potato')

  return ( 
   <div>
    <SearchBar />
   </div>
  )
}

// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

// export default async function Page() {
//   const cookieStore = cookies()
//   const supabase = createClient(cookieStore)
//   const { data: notes } = await supabase.from('notes').select()

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }
