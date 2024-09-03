import React from 'react'
import { Link, } from 'react-router-dom'
import { Search, ChevronDown, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const tokenValue = Cookies.get('token');
        setToken(tokenValue || '');
      }, []);



  return (
    <nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <div>
            <Link to="/" className="flex items-center py-4 px-2">
              <img src="./src/assets/logo.png" alt="Logo" className="h-auto w-28 mr-2" />
            </Link>
          </div>
          </div>
          
          {token ? (
            <div className="hidden md:flex items-center space-x-3">
              <div>
  <div className="hidden md:flex mr-36 items-center space-x-1">
    <Link to="/home" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Home</Link>
    <Link to="/communities" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Communities</Link>
    <Link to="/shop" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Shop</Link>
    <Link to="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">About Us</Link>
  </div>
</div>
<div className="hidden md:flex items-center space-x-3">
  <div className="relative">
    <form action="/search" method="post">
    <input type="text" className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" placeholder="Search" name='searchItem'/>
    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
      <Search size={20} />
    </button>
    </form>
  </div>
  <div className="relative">
    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-gray-500 hover:text-gray-900">
      <User size={20} className="mr-1" />
      <span>Account</span>
      <ChevronDown size={20} className="ml-1" />
    </button>
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
        <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
      </div>
    )}
  </div>
</div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/login" className="text-gray-500 hover:text-gray-900 px-4 py-2">Login/Signup</Link>
            </div>
          )}
          
      </div>
    </div>
  </nav>
);
}

export default Navbar