import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import './mygarden.css';
import { Suspense } from 'react';
import LoadingComponent from '@/components/LoadingComponent';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    redirect('/login');
  }
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
    </>
  );
}
