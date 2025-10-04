import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                    <div className="text-right">
                         <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md">
                        Sign In
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/signup" className="text-sm text-blue-600 hover:underline">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
