import axios from "axios";
import React, { useEffect, useState } from "react";

let baseURL = "http://localhost:8081/";

function AxiosGet() {
  let [posts, setPosts] = useState([]);

  async function getPost() {
    try {
      const response = await axios.get(baseURL + "api/employee");
      console.log(response.data); // Log the response data
      setPosts(response.data); // Update the state with response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function handelDelete(uid) {
    const response = await axios.delete(baseURL + "api/delete/" + uid);
    console.log(response);
  }
  async function handelEdit(uid) {
    const response = await axios.put(baseURL + "api/delete/" + uid);
    console.log(response);
  }

  useEffect(() => {
    getPost();
  }, []);

  if (posts.length <= 0 || !posts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        Data is available...
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="addemp"
                  >
                    Add Employee
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* now a table list */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.name}</td>
                <td>{post.address}</td>
                <td>{post.phone}</td>
                <td>{post.salary}</td>
                <td>
                  <button
                    onClick={() => {
                      handelEdit(post.id);
                      getPost();
                    }}
                    className="px-4 py-2 rounded-lg text-white font-bold bg-[#29e236]"
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white ml-5"
                    onClick={() => handelDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display the data */}
      </div>
    );
  }
}

export default AxiosGet;
