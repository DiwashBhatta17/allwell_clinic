import axios from "axios";
import React, { useEffect, useState } from "react";
let baseURL = "http://localhost:8081/api/register";

function Formhand() {
  const [formData, setFormData] = useState({   
    address: "",
    name: "",
    phone: "",
    salary: "",
  });


  async function setPost(){
    const response = await axios.post(baseURL,formData);
    console.log(response);
  }


  
  useEffect(()=>{
    
  },[formData])





   const [show, setShow] = useState(false);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function formHandler(event) {
    event.preventDefault(); 
    setPost();
  }

  return (
    <>
      <div>
        <div>Hello</div>
        <form onSubmit={formHandler}>
            <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            hint='name'
            name="name"
            className="form-input w-full rounded border-2 border-black bg-gray-100"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="">phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-input w-full rounded border-2 border-black bg-gray-100"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input w-full rounded border-2 border-black bg-gray-100"
            value={formData.address}
            onChange={handleChange}
            required
          />
           <label htmlFor="">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            className="form-input w-full rounded border-2 border-black bg-gray-100"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <button
            type="submit"  onClick={()=>setShow(true)}
            className="btn btn-primary w-full py-2 px-4 rounded-md bg-green-500 font-semibold"
          >
            Submit
          </button>
        </form>
        <div>{show ? 'Name : ' +formData.name +'Address : ' +formData.address + 'username : ' +formData.username: ""}</div>
        
      </div>
    </>
  );
}

export default Formhand;
