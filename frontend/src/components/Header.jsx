import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // In a real app, you'd have auth state here
  const isLoggedIn = true;
  const userName = "Aditya";

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            ExpenseManager
          </Link>
          <nav className="flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <span className="text-gray-600">Hello, {userName}</span>
                <button className="text-gray-600 hover:text-gray-800">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
