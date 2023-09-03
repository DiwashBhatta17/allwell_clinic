import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Landingpage from "./Landingpage";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../components/State/slice/counterSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handelLogout(){
    localStorage.removeItem('jwtToken');
    dispatch(logoutsuccess);
    navigate('/');

  }
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
        <button onClick={handelLogout} className="border-3 px-4 rounded-[100px] active:bg-[#bd5f5f29] hover:border-[#984545] border-[#e51616bd]">
              Logout
            </button>

        </div>
      </div>
    </>
  );
}
