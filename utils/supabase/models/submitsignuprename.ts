import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getUser } from './getUser';
import { User } from '../types/globalTypes';

export async function submitsignuprename(
  selectedCrops: string[]
): Promise<{ selectedCrops: string[] } | null> {
  // Assuming 'name' and 'avatar' are provided from somewhere, replace with your logic as needed
  const name = "User's Name"; // Replace with actual logic to get user's name
  const avatar = "User's Avatar URL"; // Replace with actual logic to get user's avatar URL

  try {
    // Get the current session data
    const supabase = createServerComponentClient({ cookies });
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError) {
      console.error('Error getting session data:', sessionError);
      return null;
    }
    if (!sessionData?.session?.user?.id) {
      console.error('No user id found in session data');
      return null; // Return null or indicate somehow that user isn't logged in or there's no session
    }

    // Insert the new user row into the 'users' table
    const { error: insertError } = await supabase
      .from('users')
      .insert([
        { id: sessionData.session.user.id, name: name, avatar_url: avatar },
      ]);

    // Handle any errors that might occur during insertion
    if (insertError) {
      console.error('Error inserting new user:', insertError);
      return null;
    }

    // Convert the selected crop names to their respective IDs
    const { data: vegData, error: vegError } = await supabase
      .from('veg')
      .select('id')
      .in('name', selectedCrops);

    if (vegError) {
      console.error('Error finding vegetable IDs:', vegError);
      return null;
    }

    // Prepare the user_veg insert data
    const userVegData = vegData.map((veg) => ({
      user_id: [13], // assuming user object contains id field
      veg_id: veg.id, // assuming vegData contains id field for each vegetable
      // ... other fields like 'planted_at' or 'harvested_at' can be null or set as needed
    }));

    // Insert the relations into user_veg table
    const { error: insertError2 } = await supabase
      .from('user_veg')
      .insert(userVegData);

    if (insertError2) {
      console.error('Error inserting into user_veg:', insertError);
    }

    return { selectedCrops };
  } catch (error) {
    // Catch and log any errors that occurred during the process
    console.error('An error occurred during the signup process:', error);
    return null;
  }
}
