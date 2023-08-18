import axios from "axios";
import React, { useEffect, useReducer } from "react";
let baseURL = "https://jsonplaceholder.typicode.com/posts";
const AddPost = "AddPost";

const initialArg = {
  post: [],
  isloading: true,
  error: false,
  success: false,
};
function reducer(state, action) {
  if (action.type === AddPost) {
    return { ...initialArg, post: action.payload, isloading: false };
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  async function getData() {
    const response = await axios.get(baseURL);
    // console.log(response);
    dispatch({ type: AddPost, payload: response.data });
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>
    
  </div>;
}

export default UseReducer;
