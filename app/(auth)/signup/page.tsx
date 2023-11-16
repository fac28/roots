'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import AuthForm from '@/components/AuthForm';

const Signup = () => {
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
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setFormError(error.message);
      setIsLoading(false);
    }
    if (!error) {
      router.push('/verify');
    }
  };

  return (
    <div className='text-center mt-10'>
      <h2 className='mt-5 text-3xl'>Sign up</h2>
      <p className='mt-2 text-sm italic'>Please create an account</p>
      <AuthForm handleSubmit={handleSubmit} isLoading={isLoading} />
      {formError && <div>{formError}</div>}
    </div>
  );
};

export default Signup;
