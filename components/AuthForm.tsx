'use client';
import { useState, FormEvent } from 'react';

interface AuthFormProps {
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => Promise<void>;
  isLoading: boolean;
}

useState;
const AuthForm: React.FC<AuthFormProps> = ({ handleSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className='flex flex-col items-center mt-10 gap-10'
      onSubmit={(e) => handleSubmit(e, email, password)}
    >
      <div className='flex flex-col items-center gap-1'>
        <label>Email</label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className='border-b border-black'
        />
      </div>
      <div className='flex flex-col items-center gap-1'>
        <label>Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className='border-b border-black'
        />
      </div>
      <button
        disabled={isLoading}
        className={`button bg-secondaryGreen mt-8 ${
          isLoading ? 'bg-slate-200' : ''
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
