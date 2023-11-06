import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: veg } = await supabase.from('veg').select();

  return <pre>{JSON.stringify(veg, null, 2)}</pre>;
}

// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

// export default async function Page() {
//   const cookieStore = cookies()
//   const supabase = createClient(cookieStore)
//   const { data: notes } = await supabase.from('notes').select()

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }
