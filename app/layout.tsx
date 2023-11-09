import './globals.css';
import Header from '@/components/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Roots',
  description: 'Your garden at your fingertips',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/images/icons-fig-96.png'
        ></link>
      </head>
      <body>
        <main className='min-h-screen flex flex-col items-center'>
          <Header isLoggedIn={!data.session ? false : true} />
          {children}
        </main>
      </body>
    </html>
  );
}
