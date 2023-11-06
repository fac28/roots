import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

type veg = {}

export const filterByVeggie = async (veggie: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.from('veg').select().eq('name', veggie)
  return data || []
}
