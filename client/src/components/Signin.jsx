import React from 'react'
import { Link } from 'react-router-dom'
const signin = () => {
  return (
    <>
      <div className=' w-full h-screen flex flex-col items-center'>
        <div className='border-2 rounded-lg bg-white  border-slate-200 h-96 max-w-80 mt-8 flex flex-col  items-center'> 
          <form className="flex flex-col justify-center items-center" action="" method="post">
          <h1 className=' text-blue-400 text-lg font-semibold mt-4 mb-2'>
              WELCOME TO FITBOOK
            </h1>
            <h1 className=' text-blue-400 text-xs font-light mb-4'>
              Please Enter Your Details
            </h1>
            <input type="text" placeholder='Username or Email' className='bg-white-800 border-2 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" placeholder='Password' className='bg-white-800 border-2 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="submit" value="Submit" className=' mt- bg-blue-600 text-white p-2 m-2 rounded-lg' />
          </form>
          <h1 className='text-blue-400 text-xs font-medium mt-4'>New here? <Link className='text-red-400 text-xs font-semibold' to="/signup">Create An Account</Link></h1>
        </div>
      </div>
    </>
  )
}

export default signin