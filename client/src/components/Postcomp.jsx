import React from 'react'

const Postcomp = (data) => {
    const posts = data.posts;
    console.log(data.posts);
    if (!Array.isArray(posts) || posts.length === 0) {
        return <div>No posts available</div>;
      }
  return (
    <>
      {posts.reverse().map(post => (
        <div key={post.id} className='flex flex-col justify-center items-center'>
          <div className='w-80 h-auto m-4 border-2'>
            <h1 className='text-blue-600 font-medium m-2'>@{post.username}</h1>
            <div className='rounded-lg flex flex-col justify-center items-center'>
              <img className='mt-2 w-80' src={post.image} alt="Post" />
              <h1 className='text-center font-light text-sm m-2'>{post.text}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Postcomp