import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { fetchIdByVegName } from './fetchIdByVegName';

export async function submitsignuprename(
  selectedCrops: string[]
): Promise<{ selectedCrops: string[] } | null> {
  try {
    // //user data
    const name = "User's Name";
    const avatar = "User's Avatar URL";
    const supabase = createServerComponentClient({ cookies });
    const { data: sessionData } = await supabase.auth.getSession();

    if (sessionData?.session?.user?.id) {
      const supabase_id = sessionData.session.user.id;

      // Insert the new user row into the 'users' table
      await supabase
        .from('users')
        .insert([{ name: name, avatar_url: avatar, supabase_id: supabase_id }]);
    }

    // Convert the selected crop names to their respective IDs
    const vegData = selectedCrops.map((veg) => fetchIdByVegName(supabase, veg));

    // Prepare the user_veg insert data
    const userVegData = vegData.map((veg) => ({
      user_id: [6969],
      veg_id: veg,
      sown_in: null,
      sown_dir: null,
    }));

    // Insert the relations into user_veg table
    const { error: insertError } = await supabase
      .from('user_veg')
      .insert(userVegData);

    if (insertError) {
      console.error('Error inserting into user_veg:', insertError);
    }

    return null;
  } catch (error) {
    // Catch and log any errors that occurred during the process
    console.error('An error occurred during the signup process:', error);
    return null;
  }
}
