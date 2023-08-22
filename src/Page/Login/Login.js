import React, { useState } from "react";

import logo from "./img/AllWell Clinic.png";
import login1 from "./img/LoginImg.png";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });
  return (
    <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src={logo} alt="" />
          </div>
          <div>
            <label className="text-black mb-3">Username</label>
            <br />
            <input
              className="border-b-[1px] w-full outline-none border-black"
              type="text"
              placeholder="Your Username"
              name="username"
              value={loginData.name}
              onChange={(e) => setLoginData(e.target.value)}
            ></input>
            <br></br>
            <label className="mt-3 mb-3" htmlFor="">
              Password
            </label>
            <br />
            <input
              className="border-b-[1px] w-full border-t-0  border-black outline-none"
              type="password"
              name="password"
              placeholder=" ******************"
              value={loginData.password}
              onChange={(e) => setLoginData(e.target.value)}
            />{" "}
            <br />
            <br />
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value={loginData.checkbox}
                  onClick={() => setLoginData({ ...loginData, checkbox: true })}
                />
                <p>Remember Me?</p>
              </div>
              <p className="text-[#2181F1]">
                <a href="#">Forget Password?</a>
              </p>
            </div>
            <div className="mt-3 text-center w-full ">
              <button className=" bg-[#2181F1] w-full py-2 rounded-lg text-white ">
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

export default Login;
