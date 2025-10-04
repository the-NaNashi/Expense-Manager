import React from 'react';

const AdminDashboard = () => {
    // Dummy data
    const users = [
        { name: 'divyang', role: 'User', manager: 'sarah', email: 'marc@gmail.com' },
        { name: 'sarah', role: 'Manager', manager: '-', email: 'sarah@gmail.com' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin View</h1>
            
            {/* User Management */}
            <div className="p-6 bg-white rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">New User</h2>
                {/* User creation form would go here */}
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">User</th>
                            <th className="py-2">Role</th>
                            <th className="py-2">Manager</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                             <tr key={user.email} className="border-b">
                                <td className="py-2">{user.name}</td>
                                <td className="py-2">{user.role}</td>
                                <td className="py-2">{user.manager}</td>
                                <td className="py-2">{user.email}</td>
                                <td className="py-2"><button className="text-blue-600">Send password</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

             {/* Approval Rules */}
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Approval Rules</h2>
                 {/* Approval rule form goes here */}
                 <p>Approval rules setup UI would be here.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
