import { User } from '../types/globalTypes';

export async function getUser(supabase: any): Promise<User | null> {
  const { data: sessionData } = await supabase.auth.getSession();
  if (sessionData?.session?.user?.id) {
    // Fetch the user ID based on the supabase_id from the session.
    const userResponse = await supabase
      .from('users')
      .select('id, name')
      .eq('supabase_id', sessionData.session.user.id);

    if (userResponse.data && userResponse.data.length > 0) {
      return {
        id: userResponse.data[0].id,
        name: userResponse.data[0].name,
      };
    }
  }
  return null;
}
