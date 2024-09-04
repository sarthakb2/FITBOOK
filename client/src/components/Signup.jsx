import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import places from '../assets/places.json'
const signup = () => {
  Cookies.set("token","");
  const [signupForm, setSignupForm] = useState({
    name : "",
    username: "",
    email: "",
    password: "",
    state : "",
    city : "",
    postalArea : ""
  })
  const handlename = (e) => {
    setSignupForm({ ...signupForm, name: e.target.value })
  }

  const handleusername = (e) => {
    setSignupForm({ ...signupForm, username: e.target.value })
  }
  const handleemail = (e) => {
    setSignupForm({ ...signupForm, email: e.target.value })
  }

  const handlepassword = (e) => {
    setSignupForm({ ...signupForm, password: e.target.value })
  }
  const handlestate = (e) => {
    setSignupForm({ ...signupForm, state: e.target.value })
  }
  const handlecity = (e) => {
    setSignupForm({ ...signupForm, city: e.target.value })
  }
  const handlepostalArea = (e) => {
    setSignupForm({ ...signupForm, postalArea: e.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupForm),
      });

      if (response.status === 201) {
        alert('Account Created, Please Signin');
        window.location.href = '/signin'
        console.log('Form submitted successfully');
     }else {
      window.location.href = '/signup'
         alert('Something Went Wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className=' w-full h-screen flex flex-col items-center mt-8 '>
        <div className='border-2 rounded-lg bg-white  border-slate-200 pr-20 pl-20 pt-4 mt-8 mb-8 flex flex-col  items-center'> 
          <form className="flex flex-col justify-center items-center mb-2" action="" method="post">
          <h1 className=' text-blue-800 text-3xl font-semibold mt-8 mb-2'>
              SIGN UP
            </h1>
            <h1 className=' text-blue-600 text-xs font-light mb-8'>
              Please Enter Your Details
            </h1>

            <input type="text" onChange={handlename} name='name' placeholder='name' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handleusername} name='username' placeholder='username' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handleemail} name='email' placeholder='email' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handlepassword} name='password' placeholder='password' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handlestate} name='state' placeholder='state' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handlecity}  name='city' placeholder='city' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none' />
            <input type="text" onChange={handlepostalArea}  name='postalArea' placeholder='postalArea' className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 mb-5 outline-none' />
            <button onClick={handleSubmit}  className=' cursor-pointer  bg-blue-800 text-white text-sm pl-2 pr-2 p-1 m-2 rounded-lg outline-none'> Create</button>
          </form>

          <h1 className='mb-10'> <Link className='text-blue-600 text-xs font-medium mt-4' to="/signin">Already signed up? <span className='text-red-600 text-xs font-semibold'>Sign In.</span></Link></h1>

        </div>
      </div>
    </>
  )
}

export default signup
