import React from "react";
import { Link } from "react-router-dom";

function DoctorNavbar() {
  return (
    <>
    
      <div className=" bg-[#497FAB] sm:w-full l bg-opacity-30 shadow ">
        <nav className="flex mx-[100px]  py-4 justify-between items-center ">
          <div className="text-3xl text-[#497FAB] font-bold">
            <Link to="/doctordashboard"><h1 className="">Allwill_Clinic</h1></Link>
          </div>
          <div className="  w-full flex text-black justify-end px-5 ">
            <ul className="  min-h-fit md:items-center md:flex-row xl:flex lg:flex md:items-center  md:gap-[4vh] ">
              <li>
                <Link to="/doctordashboard"
                  className="hover:text-[#2cbc82]"
                  rel="stylesheet"
                  href=""
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctorhistory" rel="stylesheet" href="">
                  History
                </Link>
              </li>
              <li>
                <Link to='/doctorNews' rel="stylesheet" href="">
                  News And Event
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-2">
          <Link to="/doctorAppointmentlist"><button className="relative mr-2 px-4 py-2 text-[#497FAB] rounded-full border-solid border-2 border-[#497FAB] hover:bg-black">
              Appointments
              <span className="absolute top-[-15px] right-1  bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center">
                2
              </span>
              
            </button>
            </Link>
          </div>
          <div className="border-[#871313] border-2 rounded-full ">
            <Link to="/doctorProfile"><i className="fa-sharp m-2 fa-solid fa-user text-2xl" /></Link>
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default DoctorNavbar;
