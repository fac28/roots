import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import getUserId from '@/utils/supabase/models/getUserId';

import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const selectedCrops: [{ name: string; id: number }] = body?.selectedCrops;

    const supabase = createRouteHandlerClient({ cookies });

    //Prepare the users data from supabase
    const name = 'Anon User';
    const { data: sessionData } = await supabase.auth.getSession();

    if (sessionData?.session?.user?.id) {
      const supabase_id = sessionData.session.user.id;

      // Insert into users
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ name: name, avatar: null, supabase_id: supabase_id }]);
      if (insertError) {
        console.error('Error inserting into users:', insertError);
      }
      const { data } = await getUserId(supabase, supabase_id);

      const userVegData = selectedCrops.map((veg) => ({
        user_id: data?.id,
        veg_id: veg.id,
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
