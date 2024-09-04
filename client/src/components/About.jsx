import React from 'react';
import {Map,Mail,Phone,Clock} from 'lucide-react'
const About = () => {
  return (
    <>
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold mb-8 text-blue-800">About Us</h1>
      <h1 className="text-sm text-center font-bold mb-8 text-blue-600">Welcome to FITBOOK</h1>

      <p className="text-lg mb-6 w-[480px] text-center leading-tight">
        At <span className='font-bold'>FITBOOK</span> , we're dedicated to bringing you closer to your fitness goals ans sports passions. Whether you're an athlete, a fitness enthusiast, or someone just starting their wellness journey, our platform is designed to inspire, educate, and supports your every step of the way.
      </p>
    </div>
    <div>
    <h1 className="text-4xl text-center font-bold mb-8 text-blue-800">Contact Us</h1>
    <div className="flex justify-center items-center">
        <div className='mb-8'>
            <div className='flex gap-3 flex-col'>
                <h1 className='text-sm font-semibold'>GET IN TOUCH</h1>
                <h1 className='text-lg font-bold'>Contact Us Today</h1>
                <h1 className='text-sm font-semibold'>HEAD OFFICE</h1>
            </div>
            <div>
            <span className='flex items-center gap-4'>
                <Map size={30} PIET/>
                PIET, Samalkha, Panipat(132101)
            </span>
            <span className='flex items-center gap-4'>
                <Mail size={30} PIET/>
                fitbook.piet@gmail.com
            </span>
            <span className='flex items-center gap-4'>
                <Phone size={30} PIET/>
                +91 9122017831/ +91 9817845939
            </span>
            <span className='flex items-center gap-4'>
                <Clock size={30} PIET/>
                10:00 AM - 06:00 PM
            </span>
            </div>
        </div>
        <div></div>
    </div>
    </div>
    
    </>
  );
};

export default About;