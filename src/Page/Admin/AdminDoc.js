import React from "react";
import "./AdminDoc.css";

export default function AdminDoc() {
  return (
    <>
      <div className="header bg-[#52363617] mt=[-40px] text-[#497FAB] flex items-center h-[80px]">
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
      </div>

      <div className="middlecontainer h-[200px] flex">
        <div className="check flex ml-[50px] mt-[50px] h-[140px] w-[500px] justify-center bg-[#497FAB] text-white text-center align-middle shadow-md shadow-gray-700">
          <div className="dtext mt-[40px] font-semibold text-4xl">
            {" "}
            Check Your Doctors
          </div>
        </div>
        <div className="image">
          <img
            src="/Images/Doc.png"
            alt="Doctors"
            className="_doc h-[140px] ml-[390px]"
          />
          <div className="docnum h-[30px] w-[90px] bg-[#497FAB] ml-[420px]">
            {/* {docnumber} */}
          </div>
        </div>
      </div>
      <div className="lowermarg border-1 border-[#497FAB] mt-[50px] h-[340px] flex rounded-t-[100px] rounded-b-[100px] shadow-md shadow-gray-900">
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[70px] mt-[20px]">
          <img src="dsd" alt="Doctor1" />
        </div>
        <div className="Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px] text-white text-center">
          {" "}
          view more
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[250px] mt-[20px]">
          <img src="df" alt="Doctor2" />
        </div>
        <div className="Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px]  text-white text-center">
          view more
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[210px] mt-[20px]">
          <img src="ef" alt="Doctor3" />
        </div>
        <div className="Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px]  text-white text-center">
          view more
        </div>
      </div>
    </>
  );
}
