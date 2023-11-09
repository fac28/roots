'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const LogOutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    }

    if (error) {
      console.log(error);
    }
  };

  return <button onClick={handleLogout}>Log out</button>;
};

export default LogOutButton;