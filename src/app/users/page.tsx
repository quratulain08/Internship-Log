'use client';

import { useState, useEffect } from 'react';

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function UserPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.');
      }
    }
    fetchUsers();
  }, []);

  async function addUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to add user');
      }
      
      const data = await res.json();
      alert(data.message);
      setFormData({ name: '', email: '', password: '', role: 'user' });
      const refreshedUsers = await fetch('/api/users');
      setUsers(await refreshedUsers.json());
    } catch (error) {
      console.error('Error adding user:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }

  async function deleteUser(id: string) {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete user');
      const data = await res.json();
      alert(data.message);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user. Please try again.');
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">User Management</h1>

      <form onSubmit={addUser} className="mb-6 max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <select
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          >
            <option value="user">User</option>
            <option value="admin">Admin (Internship Office)</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add User
        </button>
      </form>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <ul className="max-w-md mx-auto text-black bg-white p-4 rounded-lg shadow-lg">
        {users.map((user) => (
          <li key={user._id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-300">
            <span>{user.name} ({user.email}) - {user.role}</span>
            <button
              onClick={() => deleteUser(user._id)}
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}