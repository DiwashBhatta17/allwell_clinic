import React from "react";
import img from "../Users/UserImages/Bitmap.png";
import DoctorNavbar from "./doctorNavbar";

function DoctorProfile() {
  const doctorDetails = {
    name: "Diwash Bhatta",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium porro laudantium ipsum, perferendis at amet corrupti, tempore culpa modi obcaecati, nesciunt aliquam qui fugiat sunt aut. Suscipit quos natus itaque?",
    experience: "10+",
    phone: "9779812345678",
    email: "bhattass@gmail.com",
    whatsapp: "98123456789",
  };
  return (
    <>
      {/* component 1  */}
      <div>
        <DoctorNavbar/>
        <div className="flex mt-5  justify-around ">
          {/* image part div */}
          <div>
            <img className="rounded-full" src={img} alt="" />
            <h1 className="justify-center flex mt-3 text-2xl font-bold">
              {doctorDetails.name}
            </h1>
          </div>

          {/* About us part Div */}
          <div className="w-[40%] mt-2">
            <h1 className="text-2xl font-bold">About {doctorDetails.name}</h1>
            <p className="my-2 ">{doctorDetails.about}</p>
          </div>
        </div>
      </div>
      {/* comma */}

      {/* comp 3 */}

      <div className="flex justify-between mx-[120px]">
        <div className="mt-[100px] ml-[120px] mb-[100px]">
          <div className="flex text-3xl mb-3 gap-4 ">
            <i className="fa-solid fa-phone-volume mt-2 text-[#497FAB]"></i>
            <p>{doctorDetails.phone}</p>
          </div>
          <div className="flex text-3xl mb-3 gap-4">
            <i className="text-[#497FAB] mt-2 fa-solid fa-envelope"></i>
            <p>{doctorDetails.email}</p>
          </div>
          <div className="flex text-3xl  mb-3 gap-4">
            <i className="text-[#497FAB] fa-brands mt-2 fa-whatsapp"></i>
            <p>{doctorDetails.whatsapp}</p>
          </div>
        </div>

        <div className="mb-5 w-[30%] justify-center items-center">
          <div className="flex flex-col gap-4 w-[100%] justify-center my-5">
            <input
              placeholder=" Change Name"
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              placeholder=" Change Email Address"
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              placeholder=" Change Username"
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
             <input
              placeholder=" Change Username"
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
             <input
              placeholder=" Change Username"
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-[#497FAB] text-white px-4 py-2 rounded-[100px]">
              Save Change
            </button>
            <button className="border-3 px-4 rounded-[100px] active:bg-[#bd5f5f29] hover:border-[#984545] border-[#e51616bd]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
