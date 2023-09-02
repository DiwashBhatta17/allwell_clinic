import React from "react";
import { Link } from "react-router-dom";
import Landingpage from "./Landingpage";

export default function Navbar() {
  return (
    <>
      {" "}
      <div className="header bg-[#52363617] mt=[-40px] text-[#497FAB] flex items-center h-[80px] w-[100%]">
        <Link to="/Admindashboard" className="ml-[0px]">
          Allwell Clinic
        </Link>

        <Link to="/Admindashboard">Home</Link>
        <Link id="patient" to="/patient">
          Patient
        </Link>
        <Link id="doc" to="/admindoc">
          Doctors
        </Link>
        <Link id="news" to="/Adminnews">
          News
        </Link>
      </div>
    </>
  );
}
