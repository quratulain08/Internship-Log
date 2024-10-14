"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // API call for user login (checking credentials)
    const authenticateUser = async (email: string, password: string) => {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Invalid email or password');
        }

        return await response.json(); // Returns success status
    };

    // API call to get user details by email
    const fetchUserDetails = async (email: string) => {
        const response = await fetch(`/api/users/identity?email=${encodeURIComponent(email)}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch user details');
        }

        return await response.json(); // Returns user details
    };

    // Handle login
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            if (email === '' || password === '') {
                throw new Error('Email and Password are required');
            }

            // First, authenticate the user
            const authResponse = await authenticateUser(email, password);

            // Fetch user details to check approval status and role
            const userDetails = await fetchUserDetails(email);

            // Check if user is approved
            if (!userDetails.user.isApproved) {
                throw new Error('Account not approved. Please contact the admin.');
            }
           console.log(userDetails.user.role );
           console.log(role);
            // Check if the role matches
            if (userDetails.user.role !== role) {
                throw new Error('You do not have permission to access this role.');
            }

            // Redirect based on role
            router.push(`/${userDetails.user.role}`);
        } catch (error: any) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Get the role from the query parameters
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const roleParam = query.get('role');
        if (roleParam) {
            setRole(roleParam);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-[#7defe0] to-[#b6c0c5]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-3xl font-bold mb-4 text-center text-[#112d60]">Login</h1>
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#112d60] text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Sign up
                        </a>
                    </p>
                    <p className="text-gray-600 mt-2">Role: <span className="font-semibold">{role}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
