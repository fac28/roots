import { SupabaseClient } from '@supabase/supabase-js';

const getUserId = (supabase: SupabaseClient, supabase_id: string) => {
  return supabase
    .from('users')
    .select('id')
    .eq('supabase_id', supabase_id)
    .single();
};

export default getUserId;
