"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter hook

const Login = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      console.log('Login successful!', data);
      // Optionally store the token: localStorage.setItem('token', data.token);
      router.push('/dashboard'); // Redirect to dashboard or desired page
    } catch (error: any) {
      console.error('Login error:', error.message);
      alert(error.message); // Display error to the user
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-t from-[#7defe0] to-[#b6c0c5]'>
      <div className='w-full max-w-md p-8 bg-gradient-to-b from-[#112d60] to-[#b6c0c5] shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold text-white mb-6 text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-white'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-white'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-[#112d60] text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Login
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p>
            Don't have an account?{' '}
            <Link href="/Signup" className='text-blue-600 hover:text-blue-800'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
