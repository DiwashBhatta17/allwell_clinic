import React from "react";
import "./AdminLanding.css";
export default function Landingpage() {
  return (
    <>
      <div className="header bg-[#52363617] h-10 text-[#497FAB] flex items-center w-fit">
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
    </>
  );
}
