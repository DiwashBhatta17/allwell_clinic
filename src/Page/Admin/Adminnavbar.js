import React from "react";
import { Link } from "react-router-dom";
import Landingpage from "./Landingpage";

export default function Navbar() {
  return (
    <>
      {" "}
      <div className=" bg-[#52363617] text-[#497FAB] flex items-center justify-around h-[10vh] ">
        <div className="">
          <Link to="/Admindashboard">Allwell Clinic</Link>
        </div>
        <div className="gap-5 flex">
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
      </div>
    </>
  );
}
