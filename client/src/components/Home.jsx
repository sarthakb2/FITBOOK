import {React,useState,useEffect} from 'react'
import Post from './Post'
import Postcomp from './Postcomp'
const Home = () => {
  const [data, setData] = useState(null);
  // const posts = response.json();
  // console.log(posts);
  useEffect(() => {
    fetch('http://localhost:3000/post')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='h-'>
    <Post/>
    <Postcomp posts={data}/>
    </div>
  )
}

export default Home