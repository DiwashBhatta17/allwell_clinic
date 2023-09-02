import React from "react";
import "./AdminLanding.css";
import { Link } from "react-router-dom";
import Navbar from "./Adminnavbar";
export default function Landingpage() {
  return (
    <>
      {/* <div className="header bg-[#52363617] h-[60px] text-[#497FAB] flex items-center ">
        <div className="mr-20">Allwell Clinic</div>
        <Link to="/">Home</Link>
        <Link id="patient" to="/patient">
          Patient
        </Link>
        <Link id="doc" to="/admindoc">
          Doctors
        </Link>
        <Link id="news" to="/news">
          News
        </Link>
      </div> */}

      <Navbar />
      <div className=" mx-[200px]">
        <div className=" h-[400px] w-[300px] bg-[white] shadow-md shadow-blue-500 my-[28px] rounded-[20px]">
          <div className="yourdoc bg-[#497FAB] h-[50px] w-[300px] text-white text-center font-semibold">
            Your Doctors
          </div>
          <div className="secton h-[100px] w-[300px] shadow-md shadow-blue-500 ">
            <img
              src="/Images/Docpic.png"
              alt="Docpic"
              className="h-[80px] mt-[4px]"
            />
            <div className="det h-[50px] w-[200px] bg-[#497FAB] ml-[90px] mt-[-60px]"></div>
          </div>
          <div className="secton h-[100px] w-[300px] shadow-md shadow-blue-500 ">
            <img
              src="/Images/Docpic.png"
              alt="Docpic"
              className="h-[80px] mt-[4px]"
            />
            <div className="det h-[50px] w-[200px] bg-[#497FAB] ml-[90px] mt-[-60px]"></div>
          </div>
          <div className="secton h-[100px] w-[300px] shadow-md shadow-blue-500 ">
            <img
              src="/Images/Docpic.png"
              alt="Docpic"
              className="h-[80px] mt-[4px]"
            />
            <div className="det h-[50px] w-[200px] bg-[#497FAB] ml-[90px] mt-[-60px]"></div>
          </div>
        </div>
        <button className="mr h-[30px] w-[90px] text-white text-center bg-[#497FAB] mt-[10px] ml-[100px]">
          View More
        </button>
        {/* component */}

        <div className="welcome w-[420px] h-[400px] bg-[white]  shadow-md shadow-blue-500 ml-[750px] mt-[-400px]">
          <div className="admin bg-[#497FAB] h-[60px] w-[420px] text-center text-[white] font-bold">
            Welcome Admin
          </div>
          <img
            src="/Images/patient.png"
            alt="patient"
            className="h-[120px] ml-[20px] mt-[60px]"
          />
          <div className="ptno bg-[#497FAB] h-[30px] w-[90px] ml-[38px]"></div>
          <img
            src="/Images/Doctor.png"
            alt="patient"
            className="h-[120px] ml-[250px] mt-[-150px]"
          />
          <div className="ptno bg-[#497FAB] h-[30px] w-[90px] ml-[258px]"></div>

          <div className="lb bg-[#497FAB] h-[60px] w-[420px] mt-[50px]"></div>
        </div>
        <div className="stats h-[300px] w-[300px] bg-[white] shadow-md shadow-blue-500 mt-[40px] ml-[20px]">
          <div className="week bg-[#497FAB] w-[220px] h-[40px] rounded-[10px] ml-[40px] mt-[40px] text-white text-center font-semibold">
            Weekly Visits
          </div>
          <img
            src="/Images/stats.png"
            alt="stats"
            className="h-[120px] ml-[60px] mt-[70px]"
          />
          <div className="disp bg-[white] h-[30px] w-[120px] shadow-md shadow-blue-500 ml-[80px] mt-[20px]"></div>
        </div>
        <div className="ta h-[300px] w-[400px] bg-[white] shadow-md shadow-blue-500 mt-[-80px] ml-[720px]">
          {" "}
          <div className="today text-[#008080] text-[30px] ml-[80px] mt-[-200px]">
            Today's Appointment
          </div>
          <img
            src="/Images/today.png"
            alt="today"
            className="h-[200px] ml-[90px]"
          />
        </div>
      </div>
    </>
  );
}
