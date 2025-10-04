import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Admin (Company) Signup</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Country Selection</label>
                        <select className="w-full px-3 py-2 mt-1 border rounded-md">
                            {/* Populate with countries */}
                            <option>United States</option>
                            <option>India</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md">
                        Signup
                    </button>
                </form>
                 <div className="text-center">
                    <Link to="/login" className="text-sm text-blue-600 hover:underline">Already have an account? Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
