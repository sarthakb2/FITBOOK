import React from 'react'
import { Link } from 'react-router-dom'
const signin = () => {
  return (
    <>
      <div className=' w-full h-screen flex flex-col items-center mt-8'>
        <div className='border-2 rounded-lg bg-white  border-slate-200 pr-20 pl-20 pt-4 mt-8 flex flex-col  items-center'> 
          <form className="flex flex-col justify-center items-center mb-2" action="" method="post">
          <h1 className=' text-blue-800 text-3xl font-semibold mt-8 mb-2'>
              SIGN IN
            </h1>
            <h1 className=' text-blue-600 text-xs font-light mb-8'>
              Please Enter Your Credentials
            </h1>

            <input type="text" placeholder='Email' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" placeholder='Password' className='bg-white-800 border-2 text-black w-80 rounded-lg p-2 m-2 mb-3 outline-none' />
            <input type="submit" value="Submit" className=' cursor-pointer  bg-blue-800 text-white text-sm pl-2 pr-2 p-1 m-2 rounded-lg outline-none' />
          </form>

          <h1 className='mb-12'> <Link className='text-blue-600 text-xs font-medium mt-4' to="/signup">New here? <span className='text-red-600 text-xs font-semibold'>Create An Account.</span></Link></h1>
        </div>
      </div>
    </>
  )
}

export default signin