import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./style.css"
const Communitiesmain = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const uri = 'http://localhost:3000/community/'+ Cookies.get('token') 
        fetch(uri)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      
      console.log(data);
  return (
    <div>
        <div id='comp-bg' className=' w-full h-[300px] flex justify-center items-center'>
            <div className=' relative mr-40'>
            <h1 className='text-white text-4xl'>The Only </h1>
            <h1 className='text-white text-4xl'>Sports & Fitness Community </h1>
            <h1 className='text-white text-4xl'>You'll Ever Need. </h1>
            </div>
        </div>
        <button className='bg-blue-700 text-white m-2 p-2 rounded-lg relative ml-[84%]'><Link to="/createcommunities">Create A Community</Link></button>
        <div className='text-blue-800 mb-16'>
            <h1 className='text-2xl mt-4 text-center mb-10'>Communities in your area</h1>
            <div className='flex flex-wrap justify-evenly gap-5'>
            {(!Array.isArray(data) || data.length === 0)? (
             <div>No Community available</div>
            ): (
            data.reverse().map(com => (
            <div className='w-72 h-40 border-[1px] border-black rounded-lg mt-4 '>
                <h1 className='text-center text-2xl mt-4'>{com.name}</h1>
                <h1 className='text-center mt-4 text-2xl'>{com.postalArea+"-"+com.city+"-"+com.state}</h1>
                <h1 className='text-center mt-4 text-2xl'>{com.sport}</h1>
            </div>  
 )))}
    </div>
    </div>
    </div>
  )
}

export default Communitiesmain