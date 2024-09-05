// src/FormComponent.js
import React, { useState } from 'react';

const Community = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    postalArea: '',
    sport : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/community', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
        window.location.href = '/communities'
        alert('Community Created Successfully');
        console.log('Form submitted successfully');
     }else {
      window.location.href = '/createcommunity'
         alert('Something Went Wrong');
      }
    } catch (error) {
      console.error('Error:',
 error);
    }
  };

  return (
    <div className='flex items-center flex-col mt-8 h-screen'>
        <h1 className="text-4xl text-center font-bold mb-8 text-blue-800">Create A Community</h1>
    <form onSubmit={handleSubmit}>
      <div>

        <input
          type="text"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none'
          required
        />
      </div>
      <div>
        
        <input
          type="text"
          name="city"
          value={formData.city}
          placeholder='City'
          className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        
        <input
          type="text"
          name="state"
          placeholder='State'
          className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none'
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        
        <input
          type="text"
          name="postalArea"
          placeholder='Postal Area'
          className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none'
          value={formData.postalArea}
          onChange={handleChange}
          required
        />
      </div>
      <div>
       
        <input
          type="text"
          name="sport"
          value={formData.sport}
          placeholder='Sport'
          className='bg-white-800 border-2 w-80 text-black rounded-lg p-2 m-2 outline-none'
          onChange={handleChange}
          required
        />
      </div>
      <button className=' cursor-pointer  bg-blue-800 text-white text-sm pl-2 pr-2 p-1 m-2 rounded-lg outline-none'  type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Community;
