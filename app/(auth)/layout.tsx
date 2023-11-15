import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import getUserId from '@/utils/supabase/models/getUserId';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data: sessionData } = await supabase.auth.getSession();

  if (sessionData.session) {
    const { data: userData } = await getUserId(
      supabase,
      sessionData.session.user.id
    );

    const { data: vegCheck, error: vegCheckError } = await supabase
      .from('user_veg')
      .select('veg_id')
      .eq('user_id', userData?.id);

    if (!vegCheck || vegCheck.length === 0) {
      redirect('/selectcrops');
      return [];
    }
    redirect('/mygarden');
  }
  return <>{children}</>;
}
