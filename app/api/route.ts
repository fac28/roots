// File: app/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchIdByVegName } from '@/utils/supabase/models/fetchIdByVegName';
import { createClient } from '@supabase/supabase-js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('signupwithcrops starting');
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    const selectedCrops: string[] = req.body.selectedCrops;

    const supabaseUrl: string = process.env.SUPABASE_URL as string; // Ensure the environment variable is treated as a string
    const supabaseKey: string = process.env.SUPABASE_SERVICE_KEY as string; // Same for the service key

    const supabase = createClient(supabaseUrl, supabaseKey);

    // //user data
    const name = "User's Name";
    const avatar = "User's Avatar URL";
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
      user_id: 6969,
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

    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
