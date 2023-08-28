import React from "react";

function UserNavbar() {
  return (
    <>
      <div className="bg-[#c0bdbd] bg-opacity-20">
        <div className="mx-[120px] py-4 items-center justify-between flex ">
          <h1 className="text-2xl font-bold text-[#497FAB] font-semibold  ">
            ALLWELL CLINIC
          </h1>
          <div>
            <ul className="flex items-center justify-center gap-[35px]">
              <li>
                <a href="/home">Our Service</a>
              </li>
              <li>
                <a href="/home">News and Events</a>
              </li>
              <li>
                <a href="/home">Careers</a>
              </li>
              <li className=" text-[#0360D9]">
                <button className="px-3 py-1 border-2 border-[#0360D9]  bg-white rounded-full font-bold">
                  Login
                </button>
              </li>
              <li className="border-2 border-transparent bg-[#0360D9] text-white font-bold rounded-full">
                <button className="px-2 py-1">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNavbar;
