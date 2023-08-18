import React from "react";
import UserNavbar from "./UserNavbar";
import Firstimg1 from "../UserImages/landingpageimg1.png";

function FirstComponent() {
  return (
    <>
      <UserNavbar />
      <div className="rounded-br-[300px]  bg-[#c0bdbd] bg-opacity-20">
        <div className="flex mx-[120px]">
          <div className="div1">
            <div className="text-2xl opacity-80 text-[#497FAB] font-bold mt-4">Stay Healthy,</div>
            <div className="text-3xl mt-2 opacity-[100] text-[#497FAB]">
              Lets build wellness rather than treat disease."
            </div>
            <div className=" mt-5">
              <p>
                Welcome to our clinic where your will-being is our almost
                priority <br />
                We are committed to providing exceptional care while respecting
                your medical needs and valuable time.
              </p>
            </div>
            <div className="mt-4 ">
              <button className="border-2 bg-[#497FAB] px-4 py-1 text-white rounded-full">About Us</button>
            </div>
          </div>
          <div className="div2  rounded-br-[20px]">
            <img className="rounded-br-[120px] rounded-tr-none relative" src={Firstimg1} alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default FirstComponent;
