import {React ,useState} from 'react'
import Cookies from 'js-cookie';
const Post = () => {
    const [post, setPost] = useState({
      text: '',
       image: "",
      email: Cookies.get('token'),
    });

    const handleTextChange = (e) => {
      setPost({ ...post, text: e.target.value })
    }
  const handleImageChange = (event)=> {
    setPost({ ...post, image: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinForm),
      });
      if (response.status === 201) {
        window.location.href = '/home'
        console.log('Post submitted successfully');
     }else {
      window.location.href = '/home'
         alert('Something Went Wrong');
      }
    } catch (error) {
      console.error('Error:',
 error);
    }
  };
  return (
    <div className='flex items-center justify-center w-screen mt-4 flex-col'>
        <div className='flex flex-col w-96 items-center'>
        <textarea
        className="textarea border-2 border-grey-300 rounded-md p-2 outline-none"
        onChange={handleTextChange}
        placeholder="What's on your mind?"
        cols={30}
        name='text'
      />
      <div>
        <input onChange={handleImageChange}  type="url" name="image" id="" placeholder='Image URL' className='border-2 border-grey-300 rounded-md p-1 w-80 outline-none mt-2'/>
      </div>
      <button  className="button bg-blue-600 text-white w-80 rounded-lg mt-2" onClick={handleSubmit}>Post</button>
      </div>
      <hr className=' bg-black w-80 h-0.2 m-2'/>
    </div>
  )
}

export default Post