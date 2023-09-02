import React from "react";
import "./AdminDoc.css";
import Adminnavbar from "./Adminnavbar";
import axios from "axios";
import { useState, useEffect } from "react";
export default function AdminDoc() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyDoctor = () => {
    // Make an HTTP POST request to verify the doctor
    axios
      .post(`http://localhost:8081/verify-doctor`)
      .then((response) => {
        setIsVerified(true);
        console.log("Doctor verified.");
      })
      .catch((error) => {
        console.error("Error verifying doctor:", error);
      });
  };
  return (
    <>
      <Adminnavbar />

      <div className="middlecontainer h-[200px] flex">
        <div className="check flex ml-[50px] mt-[50px] h-[140px] w-[500px] justify-center bg-[#497FAB] text-white text-center align-middle shadow-md shadow-gray-700">
          <div className="dtext mt-[40px] font-semibold text-4xl">
            {" "}
            Check Your Doctors
          </div>
        </div>
        <div className="image">
          <img
            src="/Images/Doctor.png"
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
          <img src="/Images/Doctor.png" alt="Doctor1" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div>
        <div
          className={`Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px] text-white text-center hover:bg-[#497faba7] cursor-pointer ${
            isVerified ? "bg-green-500" : ""
          }`}
          onClick={handleVerifyDoctor}
        >
          {isVerified ? "Verified" : "Verify"}
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[250px] mt-[20px]">
          <img src="/Images/Doctor.png" alt="Doctor2" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div>
        <div
          className={`Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px] text-white text-center hover:bg-[#497faba7] cursor-pointer ${
            isVerified ? "bg-green-500" : ""
          }`}
          onClick={handleVerifyDoctor}
        >
          {isVerified ? "Verified" : "Verify"}
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[210px] mt-[20px]">
          <img src="/Images/Doctor.png" alt="Doctor3" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div>
        <div
          className={`Vm w-[160px] h-[30px] bg-[#497FAB] ml-[-180px] mt-[290px] text-white text-center hover:bg-[#497faba7] cursor-pointer ${
            isVerified ? "bg-green-500" : ""
          }`}
          onClick={handleVerifyDoctor}
        >
          {isVerified ? "Verified" : "Verify"}
        </div>
      </div>
    </>
  );
}
