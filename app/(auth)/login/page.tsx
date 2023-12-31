'use client';
import { useState } from 'react';
import AuthForm from '@/components/AuthForm';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  const router = useRouter();
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setFormError(error.message);
      setIsLoading(false);
    }
    if (!error) {
      router.push('/mygarden');
      window.location.reload();
    }
  };

  return (
    <div className='text-center mt-10'>
      <h2 className='mt-5 text-3xl'>Log In</h2>
      <p className='mt-2 text-sm italic'>Please log in to your account.</p>
      <AuthForm handleSubmit={handleSubmit} isLoading={isLoading} />
      {formError && <div>{formError}</div>}
    </div>
  );
};

export default LogIn;
