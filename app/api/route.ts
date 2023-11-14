import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import getUserId from '@/utils/supabase/models/getUserId';
import { mapVegNamesToId } from '@/utils/supabase/models/mapVegNamesToId';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const selectedCrops: string[] = body?.selectedCrops;

    const supabase = createRouteHandlerClient({ cookies });

    //Prepare the users data from supabase
    const name = "User's Name";
    const avatar = "User's Avatar URL";
    const { data: sessionData } = await supabase.auth.getSession();

    if (sessionData?.session?.user?.id) {
      const supabase_id = sessionData.session.user.id;
      // Insert into users
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ name: name, avatar: avatar, supabase_id: supabase_id }]);
      if (insertError) {
        console.error('Error inserting into users:', insertError);
      }
      const user_id = await getUserId(supabase, supabase_id);
      if (!user_id.data) {
        return null;
      }

      // Prepare the user_veg insert data from selectedCrops
      const vegData = await mapVegNamesToId(supabase, selectedCrops);
      const userVegData = vegData.map((veg) => ({
        user_id: user_id.data.id,
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
    } else {
      console.error('Error finding user');
    }

    return NextResponse.json({ message: 'Signup successful' }, { status: 200 });
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json(error);
  }
}
