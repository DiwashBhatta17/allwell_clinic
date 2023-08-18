import React, { useState } from 'react';
import axios from 'axios';

function Axioes() {
  const [postIdToDelete, setPostIdToDelete] = useState('');

  const handleDelete = async () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
      .then(response => {
        console.log('Post deleted:', response.data);
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div>
      <h1>Delete Post</h1>
      <input
        type="text"
        placeholder="Enter Post ID"
        value={postIdToDelete}
        onChange={e => setPostIdToDelete(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default Axioes;
