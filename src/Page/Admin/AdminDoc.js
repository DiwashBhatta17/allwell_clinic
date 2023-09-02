import React from "react";
import "./AdminDoc.css";
import Adminnavbar from "./Adminnavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import unverifiedDoctor, { verifyDoctor } from "../../Services/Admin/unverifiedDoctor";



export default function AdminDoc() {
  const [isVerified, setIsVerified] = useState(false);
  const [list, setList] = useState(["", "", ""]);


  
  async function fetchData(){
    try {
      const response = await unverifiedDoctor();
      setList(response)
      
    } catch (error) {
      
    }
  }
  useEffect(()=> {
    fetchData();
  }, []);
  async function doctorVerify(doctorId){
    try {
      const response = await verifyDoctor(doctorId);
      console.log("Response", response)
      
    } catch (error) {
      console.error("Cause an error", error);
      
    }
  }

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
      <div className="border-1 border-[#497FAB] mt-[50px] h-[380px] flex rounded-t-[100px] rounded-b-[100px] shadow-md shadow-gray-900 items-center justify-center">
        {/* thhis is a doctor div   */}

        {list.map((value, index) => (
          <div key={index}>
            <div className=" border-2 border-blue-400 h-[250px] w-[200px] ml-[70px] text-center">
              <img src="/Images/Doctor.png" alt="Doctor1" />
              <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
                {value.username}
              </div>
              <button onClick={()=>doctorVerify(value.doctorId)} className="bg-[#4783a8] text-white px-5 py-2 rounded-3xl mt-4">Verify</button>
            </div>
          
          </div>
        ))}
      </div>
    </>
  );
}
