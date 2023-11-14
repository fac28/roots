import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { fetchIdByVegName } from './fetchIdByVegName';

export async function submitsignuprename(
  selectedCrops: string[]
): Promise<{ selectedCrops: string[] } | null> {
  try {
    const supabase = createServerComponentClient({ cookies });
    //Prepare the users data from supabase
    const name = "User's Name";
    const avatar = "User's Avatar URL";
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData?.session?.user?.id) {
      const supabase_id = sessionData.session.user.id;
      // Insert into users
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ name: name, avatar_url: avatar, supabase_id: supabase_id }]);
      if (insertError) {
        console.error('Error inserting into users:', insertError);
      }

      // Prepare the user_veg insert data from selectedCrops
      const vegData = selectedCrops.map((veg) =>
        fetchIdByVegName(supabase, veg)
      );
      const userVegData = vegData.map((veg) => ({
        user_id: 6969,
        veg_id: veg,
        sown_in: null,
        sown_dir: null,
      }));
      // Insert into user_veg
      const { error: insertError2 } = await supabase
        .from('user_veg')
        .insert(userVegData);
      if (insertError2) {
        console.error('Error inserting into user_veg:', insertError2);
      }
    }

    return null;
  } catch (error) {
    // Catch and log any errors that occurred during the process
    console.error('An error occurred during the signup process:', error);
    return null;
  }
}
