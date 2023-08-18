import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Class() {
  const [data, setData] = useState([]);

  useEffect( async () => {
    // Fetch data when the component mounts
   await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Class;
