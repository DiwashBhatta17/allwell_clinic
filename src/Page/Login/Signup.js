import React from "react";
import logo from "./img/AllWell Clinic.png";
import login1 from "./img/LoginImg.png";
import { useState } from "react";
import AsaDoctor from "./AsaDoctor";
import AsaPatient from "./AsaPatient";

function Signup() {
    const  [signupData, setSignupdata] = useState({
        name: "",
        username: "",
        password:"",
        email: "",
        phone: "",
        confirmPassword: "",
        isDoctor: false,
    })

    const [status, setStatus]= useState(true);

    function handelChange(event){
        const {name, value} = event.target;
        setSignupdata({...signupData, [name]: value});
    }
  return (
    <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src={logo} alt="" />
          </div>
          {status? <AsaDoctor setStatus={setStatus}/> : <AsaPatient setStatus={setStatus}/>}

         {/* yo space */}

          <div>
            <div className="flex mb-1">
              <div className=""> 
                
                <label className="text-black mb-1 mt-2">Name</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg  py-1 px-1  border-black"
                  type="text"
                  placeholder=" Your Name"
                  name="name"
                  value={signupData.name}
                  onChange={handelChange}

                  
                ></input>
              </div>
              <div>
                
                <label className="text-black mb-1 mt-2">Username</label>
                <br />
                <input
                  className="border-[1px] w-[90%] py-1 px-1 rounded-lg border-black"
                  type="text"
                  placeholder=" Your Username"
                  name="username"
                  value={signupData.username}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            <div className="flex mb-1">
              <div className=""> 
                
                <label className="text-black mb-1 mt-2">Email</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg px-1 py-1  border-black"
                  type="email"
                  placeholder=" domain@gmail.com"
                  name="email"
                  value={signupData.email}
                  onChange={handelChange}
                ></input>
              </div>
              <div>
                
                <label className="text-black mb-1 mt-2">Phone Number</label>
                <br />
                <input
                  className="border-[1px] w-[90%] px-1 py-1 rounded-lg border-black"
                  type="text"
                  placeholder=" (977)-9812346789"
                  name="phone"
                  value={signupData.phone}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            <div className="flex mb-1">
              <div className=""> 
                
                <label className="text-black mb-1 mt-2">Password</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg  py-1 px-1 border-black"
                  type="password"
                  placeholder=" ********"
                  name="password"
                  value={signupData.password}
                  onChange={handelChange}
                ></input>
              </div>
              <div>
                
                <label className="text-black mb-1 mt-2">Confirm Password</label>
                <br />
                <input
                  className="border-[1px] w-[90%] py-1 px-1 rounded-lg border-black"
                  type="password"
                  placeholder=" ********"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            




           
           
            <div className="mt-5 text-center w-full ">
              <button className=" bg-[#2182f1c4] w-full py-2 rounded-lg text-white ">
                Register
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Already have an account?</p>
              <p className="text-[#2181F1]">Login?</p>
            </div>
          </div>
        </div>
        <div className="flex  pl-6">
          <img className="w-[450px]" src={login1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
