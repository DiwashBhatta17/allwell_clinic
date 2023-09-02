import React from "react";
import "./AdminDoc.css";
import Adminnavbar from "./Adminnavbar";
import axios from "axios";
import { useState, useEffect, useNavigate } from "react";
import DoctorLists from "../Users/DoctorLists";
import { Link } from "react-router-dom";
import DocDetails from "./DocDetails";
export default function AdminDoc() {
  const [doctorlist, setDoctorlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/doctor/list-all-doctor")
      .then((response) => {
        // Set the list of doctors in the state variable
        setDoctorlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, []);

  function handleVerifyDoctor(doctorId) {
    axios
      .post(`http://localhost:8081/verify-doctor/${doctorId}`)
      .then((response) => {
        console.log(`Doctor ${doctorId} verified successfully.`);
      })
      .catch((error) => {
        console.error(`Error verifying doctor ${doctorId}:`, error);
      });
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
          <div className="docnum h-[30px] w-[90px] bg-[#497FAB] ml-[420px] text-center text-[white] font-semibold">
            {doctorlist.length}
          </div>
        </div>
      </div>
      <div className="lowermarg border-1 border-[#497FAB] mt-[50px] h-[340px] flex rounded-t-[100px] rounded-b-[100px] shadow-md shadow-gray-900">
        {/* <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[70px] mt-[20px]">
          <img src="/Images/Doctor.png" alt="Doctor1" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[250px] mt-[20px]">
          <img src="/Images/Doctor.png" alt="Doctor2" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div>
        <div className="collage border-2 border-blue-400 h-[200px] w-[200px] ml-[210px] mt-[20px]">
          <img src="/Images/Doctor.png" alt="Doctor3" />
          <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
            doctor name
          </div>
        </div> */}
        <div className="flex">
          <ul className="flex">
            {doctorlist.map((doctor) => (
              <li
                key={doctor.id}
                className="bg-[#ffffff] ml-[120px] text-[#000000] mt-[200px] h-[70px] text-center text-[20px] w-[290px]  shadow-md shadow-blue-500 mb-[10px]"
              >
                <Link to="/doctordetails">
                  <img
                    src="/Images/Doctor.png"
                    alt="Docpic"
                    className="h-[120px] ml-[80px] mt-[-180px] hover:cursor-pointer"
                  />
                </Link>
                <p className="mt-[30px] ml-[10px]">{doctor.doctorName}</p>
                <button
                  className="bg-[#497FAB] w-[100px] h-[30px] text-white mt-[30px]"
                  onClick={() => handleVerifyDoctor(doctor.id)}
                >
                  Verify
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
