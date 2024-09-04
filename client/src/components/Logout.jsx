import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
const Logout = () => {
Cookies.set("token","");
  return (
    <div className='flex flex-col items-center'>
        <h1 className="text-4xl text-center font-bold mt-8 mb-8 text-blue-800">Thank You for Using!</h1>
        <div className=' flex gap-4'>
        <button className=' bg-red-600 text-white font-bold w-24 py-2 px-4 rounded-full'><Link to="/signin">Sign In</Link></button>
        <button className=' bg-green-600 text-white font-bold w-24 py-2 px-4 rounded-full'><Link to="/signup">Sign Up</Link></button>
        </div>
    </div>
  )
}

export default Logout