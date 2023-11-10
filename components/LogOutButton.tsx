'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

type children = {
  isHomePage: boolean;
  toggle: boolean;
};

const LogOutButton = ({ isHomePage, toggle }: children) => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
      window.location.reload();
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <button
      className={`${
        isHomePage || !toggle ? 'text-primaryLight' : 'text-primaryDark'
      }`}
      onClick={handleLogout}
    >
      Log out
    </button>
  );
};

export default LogOutButton;
