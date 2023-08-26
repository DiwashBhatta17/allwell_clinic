import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

function UserNavbar() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <>
      <div className="bg-[#c0bdbd] bg-opacity-20">
        <div className="mx-[120px] py-4 items-center justify-between flex ">
          <Link to="/">
            
            <h1 className="text-2xl font-bold text-[#497FAB] font-semibold  ">
              ALLWELL CLINIC
            </h1>
          </Link>

          <div>
            <ul className="flex items-center justify-center gap-[35px]">
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <a href="/home">News and Events</a>
              </li>

              <li className=" text-[#0360D9]">
                <button
                  onClick={() => setLogin(true)}
                  className="px-3 py-1 border-2 border-[#0360D9]  bg-white rounded-full font-bold"
                >
                  Login
                </button>
              </li>
              <li className="border-2 border-transparent bg-[#0360D9] text-white font-bold rounded-full">
                <button  onClick={() => setSignup(true)} className="px-2 py-1">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Login login={login} setSignup={setSignup} setLogin={setLogin} />
      <Signup signup={signup} setLogin={setLogin} setSignup={setSignup}/>
    </>
  );
}

export default UserNavbar;
