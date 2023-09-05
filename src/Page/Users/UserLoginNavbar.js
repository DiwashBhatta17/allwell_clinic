import React from 'react';
import { Link } from "react-router-dom";

function UserLoginNavbar() {
  return (
    <>
      <div className="bg-[#c0bdbd] bg-opacity-20">
        <div className="mx-[120px] py-4 items-center justify-between flex ">
          <a to="/">
            
            <h1 className="text-2xl font-bold text-[#497FAB] font-semibold  ">
              ALLWELL CLINIC
            </h1>
          </a>

          <div>
            <ul className="flex items-center justify-center gap-[35px]">
              <li>
                <a to="/service">Services</a>
              </li>
              <li>
                <a href="/home">मिडिया</a>
              </li>

              <li className=" text-[#0360D9] text-2xl">
              <i className="fa-solid fa-user-large"></i>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default UserLoginNavbar;
