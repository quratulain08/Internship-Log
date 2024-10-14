"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ApproveSignup = () => {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [approvedUsers, setApprovedUsers] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null); // For managing selected user
  const validRoles = ['student', 'faculty', 'site-supervisor', 'au-placement', 'dic'];
  const [role, setRole] = useState('');

  const fetchUnapprovedUsers = async () => {
    try {
      const response = await fetch('/api/users/unapproved', { method: 'GET' });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to fetch unapproved users');

      setUsers(data);
      setError('');
    } catch (error: any) {
      setUsers([]);
      setError(error.message);
    }
  };

  const fetchApprovedUsers = async () => {
    try {
      const response = await fetch('/api/users/approved', { method: 'GET' });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to fetch approved users');

      setApprovedUsers(data);
      setError('');
    } catch (error: any) {
      setApprovedUsers([]);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUnapprovedUsers(); // Fetch unapproved users when component mounts
    fetchApprovedUsers(); // Fetch approved users when component mounts
  }, []);

  const handleApprove = async (email: string) => {
    try {
      const response = await fetch('/api/user/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to approve user');

      setMessage(`User approved: ${data.user.email} as ${data.user.role}`);
      setError('');
      fetchUnapprovedUsers(); // Refresh the list of unapproved users
      fetchApprovedUsers(); // Refresh the list of approved users
    } catch (error: any) {
      setError(error.message);
      setMessage('');
    }
  };

  const handleRoleChange = (user: any) => {
    setSelectedUser(user);
    setRole(user.role || ''); // Set the selected user's role
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#7defe0] to-[#b6c0c5]">
      <div className="w-full max-w-4xl p-8 bg-gradient-to-b from-[#112d60] to-[#b6c0c5] shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Approve User Signups</h1>

        {error && <p className="mt-4 text-red-600">{error}</p>}
        {message && <p className="mt-4 text-green-600">{message}</p>}

        {/* Unapproved Users Section */}
        <h1 className="text-xl font-bold text-white mb-4">UnApproved Users</h1>
        <div className="mt-4">
          {users.length === 0 ? (
            <p className="text-white">No unapproved users found.</p>
          ) : (
            users.map((user) => (
              <div key={user.email} className="mb-4 p-4 bg-white rounded-md shadow">
                <h2 className="text-lg font-bold text-gray-800 mb-2">User Identity</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role || 'Not assigned'}</p>
                <p><strong>Approved:</strong> {user.isApproved ? 'Yes' : 'No'}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleRoleChange(user)}
                    className="mr-2 py-2 px-4 bg-yellow-600 text-white rounded-md shadow-sm hover:bg-yellow-800"
                  >
                    Change Role
                  </button>
                  <button
                    onClick={() => handleApprove(user.email)}
                    className="py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-800"
                  >
                    Approve
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {selectedUser && (
          <div className="mt-6 p-4 bg-gray-200 rounded-md shadow">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Change Role for {selectedUser.username}</h2>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Role</option>
              {validRoles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <button
              onClick={() => handleApprove(selectedUser.email)}
              className="mt-2 w-full py-2 px-4 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-800"
            >
              Save Role and Approve
            </button>
          </div>
        )}

        {/* Approved Users Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Approved Users</h2>
          {approvedUsers.length === 0 ? (
            <p className="text-white">No approved users found.</p>
          ) : (
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="py-2 px-4 border-b">Username</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Role</th>
                  <th className="py-2 px-4 border-b">Approved</th>
                </tr>
              </thead>
              <tbody>
                {approvedUsers.map((user) => (
                  <tr key={user.email}>
                    <td className="py-2 px-4 border-b">{user.username}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                    <td className="py-2 px-4 border-b">{user.isApproved ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApproveSignup;
