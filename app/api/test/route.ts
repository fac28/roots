import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: Request) {
  const body = await request.json();

  const supabase = await createRouteHandlerClient(request);

  const { data, error } = await supabase
    .from('user_veg')
    .insert([{ ...body, user_id: request.session.user.id }]);

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json(data);
}
