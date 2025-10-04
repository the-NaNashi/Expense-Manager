import React from 'react';

const ManagerDashboard = () => {
    // Dummy data
    const approvals = [
        { owner: 'Sara', category: 'Food', amount: '567 USD' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manager's View</h1>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Approvals to review</h2>
                <table className="w-full text-left">
                     <thead>
                        <tr className="border-b">
                            <th className="py-2">Request Owner</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Total Amount</th>
                            <th className="py-2">Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {approvals.map(item => (
                             <tr key={item.owner} className="border-b">
                                <td className="py-2">{item.owner}</td>
                                <td className="py-2">{item.category}</td>
                                <td className="py-2">{item.amount}</td>
                                <td className="py-2 space-x-2">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
                                </td>
                            </tr>
                        ))}
                     </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerDashboard;
