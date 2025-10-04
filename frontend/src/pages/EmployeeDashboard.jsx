import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
    // Dummy Data
    const expenses = [
        { id: '1', description: 'Restaurant Bill', date: 'Oct 02, 2025', status: 'Submitted' },
        { id: '2', description: 'Client Lunch', date: 'Oct 01, 2025', status: 'Approved' },
    ];
    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Employee View</h1>
                <Link to="/submit-expense" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Submit New Expense
                </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                 <h2 className="text-2xl font-semibold mb-4">My Expenses</h2>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b">
                            <th className="py-2">Description</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Status</th>
                        </tr>
                     </thead>
                      <tbody>
                        {expenses.map(exp => (
                            <tr key={exp.id} className="border-b">
                                <td className="py-2">{exp.description}</td>
                                <td className="py-2">{exp.date}</td>
                                <td className="py-2">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                         exp.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                     }`}>
                                        {exp.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
