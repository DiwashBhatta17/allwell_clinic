import React from "react";
import Navbar from "./Adminnavbar";
import { useState } from "react";

export default function News() {
  const [pageinfo, setPageinfo] = useState({
    contacts: "",
    location: "",
    email: "",
  });
  return (
    <>
      {/* <div className="header bg-[#52363617] mt=[-40px] text-[#497FAB] flex items-center h-[80px]">
        <div className="mr-20">Allwell Clinic</div>
        <a href="">Home</a>
        <a id="patient" href="">
          Patient
        </a>
        <a id="doc" href="">
          Doctors
        </a>
        <a id="news" href="">
          News
        </a>
      </div> */}

      <Navbar />
      <div className="Allwellclinic h-[420] w-[100%] bg-[white] shadow-md shadow-blue-500 ml-[0px] mt-[30px]">
        <h1 className="text-[#497FAB] text-center text-[4vw]">
          Allwell clinic
        </h1>
      </div>
      <div className="Manage h-[290px] w-[100%] bg-[white] shadow-md shadow-blue-500 ml-[px] mt-[40px]">
        {/* <p className="mp text-center text-[#497FAB] font-semibold text-2xl">
          Manage and Get Upates about your Patients.
        </p> */}
        <img
          src="/Images/clinic.jpeg"
          alt="clinic"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="lowercage  mt-[100px] h-[00px] ">
        <div className="up h-[400px] w-[32%] shadow-md shadow-blue-500 ml-[40px] mt-[30px] rounded-t-[20px] ">
          <div className="want bg-[#497FAB] w-[100%] rounded-t-[10px] h-[60px] text-[white] text-center font-semibold">
            Want to Update anything?
          </div>
          {/* <img
            src="/Images/link.png"
            alt="link"
            className="al h-[40px] ml-[40px] mt-[10px]"
          /> */}
          <input
            type="text"
            className="addlink w-[90%] h-[40px] ml-[20px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center "
          />
          <p className="ml-[120px] mt-[10px]">Add title of your news</p>
          <img
            src="/Images/add.png"
            alt="addphoto"
            className="ap h-[140px] ml-[220px] hover:cursor-pointer"
          />
          <input className="link w-[90%] h-[40px] ml-[30px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center" />
          <p className="ml-[150px] mt-[10px]">Add Details</p>
        </div>
        <button className="pd bg-[#497FAB] h-[30px] w-[120px] ml-[140px] mt-[20px] text-[white] text-center font-semibold">
          UPDATE
        </button>
        <div className="newsup h-[380px] w-[24%] shadow-md shadow-blue-500 ml-[880px] mt-[-450px] rounded-t-[20px]">
          <div className="nu bg-[#497FAB] h-[60px] w-[100%] ml-[0px] mt-[20px] text-[white] text-center font-semibold rounded-[10px]">
            <p>Update Page Info</p>
            <img
              src="/Images/Home page.png"
              alt="hIU"
              className="h-[30px] ml-[42px] mt-[-23px]"
            />
          </div>
          <img
            src="/Images/call.png"
            alt=""
            className="h-[120px] ml-[-30px] mb-[0px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-80px]">
            <input
              type="text"
              className="text-[#497FAB]"
              value={pageinfo.contacts}
              onChange={(event) => setPageinfo(event.target.value)}
            />
            {console.log(pageinfo.contacts)}
          </div>
          <img
            src="/Images/location.png"
            alt="location"
            className="h-[40px] mt-[50px] ml-[4px] "
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" className="text-[#497FAB]" />
          </div>
          <img
            src="/Images/mail.png"
            alt="mail"
            className="h-[30px] mt-[60px] ml-[10px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" className="text-[#497FAB]" />
          </div>

          <button className="b1 bg-[#497FAB] w-[200px] h-[30px] text-[white] text-center ml-[60px] mt-[40px] rounded-[20px]">
            Update Info
          </button>
        </div>
      </div>
    </>
  );
}
