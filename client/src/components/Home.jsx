import {React ,useState} from 'react'

const Home = () => {
    const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event)=> {
    setImage(event.target.files[0]);
  };

  const handleSubmit   
 = () => {
    // Validate input (e.g., check for empty text content)

    // Create a new post object
    const newPost = {
      text,
      image: image ? URL.createObjectURL(image) : null
    };

    // Send the post data to the server for processing (using AJAX or a similar method)

    // Clear the input fields
    setText('');
    setImage(null);

    // Display the new post in the feed (if applicable)
  };
  return (
    <div>
        <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        placeholder="What's on your mind?"
      />
      <div className="image-upload">
        <label htmlFor="image-upload">
          <i className="fa fa-camera"></i>
          <span>Add a photo</span>
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </div>
      <button className="button" onClick={handleSubmit}>Post</button>
    </div>
  )
}

export default Home