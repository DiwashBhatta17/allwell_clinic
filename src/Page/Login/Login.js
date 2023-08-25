import React, { useState } from "react";

import logo from "./img/AllWell Clinic.png";
import login1 from "./img/LoginImg.png";
import loginService from "../../Services/LoginService/loginService";

function Login(props) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });
  console.log(loginData);

  const [errorMessage, setErrormessage] = useState("");

  async function handelClick() {
    if (loginData.username == "") {
      setErrormessage("Username cant be empty!");
    } else if (loginData.password == "") {
      setErrormessage("password cant be empty!");
    } else {
      const loginDataApi = {
        username: loginData.username,
        password: loginData.password,
      };
      try {
        setErrormessage("");
        await loginService(loginDataApi);
      } catch (error) {
        setErrormessage("Invalid Username");
      }

      if (!loginData.checkbox) {
        setLoginData({ ...loginData, username: "", password: "" });
      }
    }
  }

  return props.login ? (
    <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src={logo} alt="" />
          </div>

          <div className=" text-center  rounded-lg alert-danger" role="alert">
            {errorMessage}
          </div>

          <div>
            <label className="text-black mb-3">Username</label>
            <br />
            <input
              className="border-b-[1px] w-full outline-none border-black"
              type="text"
              placeholder="Your Username"
              name="username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
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
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />{" "}
            <br />
            <br />
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={loginData.checkbox} // Use "checked" instead of "value" for checkboxes
                  onChange={(e) =>
                    setLoginData({ ...loginData, checkbox: e.target.checked })
                  }
                />

                <p>Remember Me?</p>
              </div>
              <p className="text-[#2181F1]">
                <a href="#">Forget Password?</a>
              </p>
            </div>
            <div className="mt-3 text-center w-full ">
              <button
                onClick={handelClick}
                className=" hover:bg-[#5672d7] bg-[#2182f1c4] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white "
              >
                Login
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Don't have an account?</p>
              <p className="text-[#2181F1]">Register?</p>
            </div>
          </div>
        </div>
        <div className="  pl-6">
          <button onClick={() => props.setLogin(false)}>
            <i className="absolute top-[120px] text-2xl focus:text-yellow-50 text-black  left-[76%] fa-solid fa-xmark"></i>
          </button>
          <img className="w-[450px]" src={login1} alt="" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
