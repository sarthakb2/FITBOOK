import React from 'react'
import { Link } from 'react-router-dom'
const signup = () => {
  return (
    <>
      <div className=' w-full h-screen flex flex-col items-center mt-8 '>
        <div className='border-2 rounded-lg bg-white  border-slate-200 pr-20 pl-20 pt-4 mt-8 mb-8 flex flex-col  items-center'> 
          <form className="flex flex-col justify-center items-center mb-2" action="http://localhost:3000/signup" method="post">
          <h1 className=' text-blue-800 text-3xl font-semibold mt-8 mb-2'>
              SIGN UP
            </h1>
            <h1 className=' text-blue-600 text-xs font-light mb-8'>
              Please Enter Your Details
            </h1>

            <input type="text" name='name' placeholder='name' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" name='username' placeholder='username' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" name='email' placeholder='email' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" name='password' placeholder='password' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" name='state' placeholder='state' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text"  name='city' placeholder='city' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text"  name='postalArea' placeholder='postalArea' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 mb-5 outline-none' />
            <input type="submit" value="Submit" className=' cursor-pointer  bg-blue-800 text-white text-sm pl-2 pr-2 p-1 m-2 rounded-lg outline-none' />
          </form>

          <h1 className='mb-10'> <Link className='text-blue-600 text-xs font-medium mt-4' to="/signin">Already signed up? <span className='text-red-600 text-xs font-semibold'>Sign In.</span></Link></h1>

        </div>
      </div>
    </>
  )
}

export default signup
