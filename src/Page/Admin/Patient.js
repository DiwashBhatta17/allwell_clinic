import React from "react";
import Navbar from "./Navbar";

export default function Patient() {
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
      <div className="Manage h-[60px] w-full md:w-[800px] bg-white shadow-md shadow-blue-500 mx-4 md:ml-[220px] mt-[40px]">
        <p className="mp text-center text-[#497FAB] font-semibold text-xl md:text-2xl">
          Manage and Get Upates about your Patients.
        </p>
      </div>
      <div className="body shadow-md shadow-blue-500 md:h-[800px] mt-8 md:mt-[60px] flex flex-col md:flex-row">
        <div className="logpatient h-[300px] w-full md:w-[350px] bg-white shadow-md shadow-blue-500 md:ml-[840px] mb-4 md:mb-0">
          <div className="ldp h-[60px] w-[350px] mt-[170px] bg-[#497FAB]">
            <p className="lip text-[white] text-center font-semibold ">
              Logged in patients
            </p>
          </div>
          <p className="num text-black text-[30px] ml-[150px]">20</p>
          <img
            src="Images/logged.png"
            alt="logged"
            className="log h-[120px] ml-[120px] mt-[-240px]"
          />
        </div>
        <div className="patientdet h-[420px] w-[400px] bg-white shadow-md shadow-blue-500 mt-[380px] ml-[-370px] rounded-[20px]">
          <div className="pdetails h-[60px] w-[400px] bg-[#497FAB]  ml=[370px] rounded-t-[10px] flex">
            <p className="pd text-white text-center font-semibold mt-[10px] ml-[140px]">
              Patient Details
            </p>
            <img
              src="/Images/logged.png"
              alt="logged"
              className="log h-[80px] mt-[80px] ml-[-230px]"
            />
            <div className="bio h-[160px] w-[230px] bg-[white] shadow-md shadow-blue-500 mt-[100px] ml-[40px] text-[#497FAB] font-semibold text-center">
              patient bio details
            </div>
            <div className="bio h-[130px] w-[400px] bg-[white] shadow-md shadow-blue-500 mt-[280px] ml-[-360px] text-[#497FAB] font-semibold text-center">
              patient Site details
            </div>
          </div>
          <div className="userlist h-[550px] w-[340px]  bg-[#ffffff] ml-[-800px] mt-[-300px] rounded-[30px] shadow-md shadow-blue-500">
            <div className="input bg-[#497FAB] w-[340px] h-[60px] rounded-t-[10px] flex ">
              <img
                src="/Images/search.jpeg"
                alt="search"
                className="sear h-[20px] ml-[36px] mt-[20px]"
              />
              <input
                type="text"
                className="ip bg-[#fffffff1] mt-[19px] ml-[0px] h-[20px] w-[190px] text-[#497FAB]"
              />
            </div>
            <div className="plist bg-[white] shadow-md shadow-blue-500 w-[340px] h-[80px] mt-[25px]">
              <img
                src="/Images/logged.png"
                alt="user1"
                className="pt1 h-[60px]"
              />
              <div className="ptdt bg-[#497FAB] h-[60px] w-[220px] ml-[80px] mt-[-60px]">
                <p className="tx text-[white] text-center font-medium">
                  Patient name , details
                </p>
              </div>
            </div>
            <div className="plist bg-[white] shadow-md shadow-blue-500 w-[340px] h-[80px] mt-[25px]">
              <img
                src="/Images/logged.png"
                alt="user1"
                className="pt1 h-[60px]"
              />
              <div className="ptdt bg-[#497FAB] h-[60px] w-[220px] ml-[80px] mt-[-60px]">
                <p className="tx text-[white] text-center font-medium">
                  Patient name , details
                </p>
              </div>
            </div>
            <div className="plist bg-[white] shadow-md shadow-blue-500 w-[340px] h-[80px] mt-[25px]">
              <img
                src="/Images/logged.png"
                alt="user1"
                className="pt1 h-[60px]"
              />
              <div className="ptdt bg-[#497FAB] h-[60px] w-[220px] ml-[80px] mt-[-60px]">
                <p className="tx text-[white] text-center font-medium">
                  Patient name , details
                </p>
              </div>
            </div>
            <div className="plist bg-[white] shadow-md shadow-blue-500 w-[340px] h-[80px] mt-[35px]">
              <img
                src="/Images/logged.png"
                alt="user1"
                className="pt1 h-[60px]"
              />
              <div className="ptdt bg-[#497FAB] h-[60px] w-[220px] ml-[80px] mt-[-60px]">
                <p className="tx text-[white] text-center font-medium">
                  Patient name , details
                </p>
              </div>
            </div>
            <div className="mv bg-[#497FAB] h-[30px] w-[120px] ml-[90px] mt-[10px] text-[white] text-center">
              View more
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
