// pages/signup.tsx
"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Correct router import

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '', // Optional field in case you want to set a role initially
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess('User registered successfully! Awaiting approval.');
      setFormData({ username: '', email: '', password: '', role: '' });

      // Optionally redirect to login after a delay
      setTimeout(() => router.push('/Login'), 3000);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-t from-[#7defe0] to-[#b6c0c5]'>
      <div className='w-full max-w-md p-8 bg-gradient-to-b from-[#112d60] to-[#b6c0c5] shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold text-white mb-6 text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-white'>Username</label>
            <input
              type='text'
              id='username'
              value={formData.username}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-white'>Email</label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-white'>Password</label>
            <input
              type='password'
              id='password'
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='role' className='block text-white'>Role (Optional)</label>
            <select
              id='role'
              value={formData.role}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
            >
              <option value=''>Select Role</option>
              <option value='student'>Student</option>
              <option value='faculty'>Faculty</option>
              <option value='site-supervisor'>Site Supervisor</option>
              <option value='au-placement'>AU Placement</option>
              <option value='dic'>DIC</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full py-2 px-4 bg-[#112d60] text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#112d60]'
          >
            Sign Up
          </button>
        </form>

        {error && <p className='mt-4 text-red-500 text-center'>{error}</p>}
        {success && <p className='mt-4 text-green-500 text-center'>{success}</p>}

        <div className='mt-4 text-center'>
          <p>
            Already have an account?{' '}
            <Link href="/Login" className='text-blue-600 hover:text-blue-800'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
