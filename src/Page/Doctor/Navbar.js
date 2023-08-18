import React from "react";

function Navbar() {
  return (
    <>
    
      <div className=" bg-[#497FAB] sm:w-full l bg-opacity-30 shadow ">
        <nav className="flex mx-[100px]  py-4 justify-between items-center ">
          <div className="text-3xl text-[#497FAB] font-bold">
            <h1 className="">Allwill_Clinic</h1>
          </div>
          <div className="  w-full flex text-black justify-end px-5 ">
            <ul className="  min-h-fit md:items-center md:flex-row xl:flex lg:flex md:items-center  md:gap-[4vh] ">
              <li>
                <button
                  className="hover:text-[#2cbc82]"
                  rel="stylesheet"
                  href=""
                >
                  Home
                </button>
              </li>
              <li>
                <button rel="stylesheet" href="">
                  History
                </button>
              </li>
              <li>
                <button rel="stylesheet" href="">
                  Feedback
                </button>
              </li>
            </ul>
          </div>
          <div className="pr-2">
            <button className="relative mr-2 px-4 py-2 text-[#497FAB] rounded-full border-solid border-2 border-[#497FAB] hover:bg-black">
              Appointments
              <span className="absolute top-1 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center">
                2
              </span>
            </button>
          </div>
          <div className="border-[#871313] border-2 rounded-full ">
            <i className="fa-sharp m-2 fa-solid fa-user text-2xl" />
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default Navbar;
