import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import { setSignup , setlogin } from "../../components/State/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function UserNavbar() {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.counter.isAuthenticated);


  

  return (
    <>
      <div className="bg-[#c0bdbd] bg-opacity-20  w-full ">
        <div className="mx-[120px] py-4 items-center justify-between flex ">
          <Link to="/">
            
            <h1 className="text-2xl font-bold text-[#497FAB] font-semibold  ">
              ALLWELL CLINIC
            </h1>
          </Link>

          <div>
            <ul className="flex items-center justify-center gap-[35px]">
              <li>
                <Link to="/service">हाम्रा सेवाहरु</Link>
              </li>
              <li>
                <Link to="/userNews">मिडिया</Link>
              </li>

              {
                isloggedin? <>
                <li className=" text-[#0360D9] text-2xl">
             <Link to='/userProfile'> <i className="fa-solid fa-user-large"></i></Link>
              </li>
                </>:
                <>
                 <li className=" text-[#0360D9]">
                <button
                  onClick={() => dispatch(setlogin(true))}
                  className="px-3 py-1 border-2 border-[#0360D9]  bg-white rounded-full font-bold"
                >
                  Login
                </button>
              </li>
              <li className="border-2 border-transparent bg-[#0360D9] text-white font-bold rounded-full">
                <button  onClick={() => dispatch(setSignup(true))} className="px-2 py-1">Sign Up | रजिस्टर</button>
              </li>
                </>
              }

             
            </ul>
          </div>
        </div>
      </div>
      <Login  />
      <Signup />
    </>
  );
}

export default UserNavbar;
