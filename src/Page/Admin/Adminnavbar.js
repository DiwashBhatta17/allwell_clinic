import React from "react";
import { Link } from "react-router-dom";
import Landingpage from "./Landingpage";

export default function Navbar() {
  return (
    <>
      {" "}
      <div className="header bg-[#52363617] mt=[-40px] text-[#497FAB] flex items-center h-[80px] w-[100%]">
        <div className="mr-20">Allwell Clinic</div>
        <Link to="/Admindashboard">home</Link>
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
