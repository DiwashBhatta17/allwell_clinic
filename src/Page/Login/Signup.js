import React from "react";
import logo from "./img/AllWell Clinic.png";
import login1 from "./img/LoginImg.png";

function Signup() {
  return (
    <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src={logo} alt="" />
          </div>

          <div className="bg-[#2182f157] flex justify-between px-4 py-1 rounded-lg">
            <div className="flex gap-2 bg-white px-3 py-1 rounded-lg">
            <i className="fa-solid mt-1 text-[rgb(33,78,241)] fa-user-doctor"></i>
              <p>As a Doctor</p>
            </div>
            <div className="flex gap-2  px-2 py-1 rounded-lg">
            <i className="fa-solid mt-1 text-[rgb(33,78,241)] fa-hospital-user"></i>
              <p>As a patients</p>
            </div>
          </div>

          <div>
            <label className="text-black mb-3">Username</label>
            <br />
            <input
              className="border-b-[1px] w-full  border-black"
              type="text"
              placeholder="Your Username"
              name="username"
            ></input>
            <br></br>
            <label className="mt-3 mb-3" htmlFor="">
              Password
            </label>
            <br />
            <input
              className="border-b-[1px] w-full  border-black"
              type="password"
              name="password"
              placeholder="*******************"
            />{" "}
            <br />
            <br />
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>Remember Me?</p>
              </div>
              <p className="text-[#2181F1]">
                <a href="#">Forget Password?</a>
              </p>
            </div>
            <div className="mt-3 text-center w-full ">
              <button className=" bg-[#2182f1c4] w-full py-2 rounded-lg text-white ">
                Login
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Don't have an account?</p>
              <p className="text-[#2181F1]">Register?</p>
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
