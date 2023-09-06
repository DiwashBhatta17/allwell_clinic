import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Landingpage from "./Landingpage";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../components/State/slice/counterSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handelLogout() {
    localStorage.removeItem("jwtToken");
    dispatch(logoutsuccess);
    navigate("/");
  }
  return (
    <>
      <div className=" bg-[#f61b1b17] text-[#497FAB] flex items-center h-[14vh]  border-2 border-white">
        <div className="flex items-center justify-around w-full ">
          <Link className="text-3xl font-bold" to="/Admindashboard">Allwell Clinic</Link>
          <button
            className=" border-2 border-red-500 rounded-full px-4 py-1 hover:bg-[#ff000021] "
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="options border-4 border-gray-300 h-screen w-[200px] fixed">
        <div className="bg bg-[#497FAB33] h-[300px] p-[10px] pl-[-10px]">
          <Link to="/admindoc">
            <div className="verify  bg-[#497FAB33] mt-[10px] h-[50px] flex hover:bg-[#4997ab8f] border-1 border-black">
              <img
                src="/Images/verifydoc.png"
                alt="verify"
                className="h-[30px] mt-[10px] ml-[10px]"
              />
              <p className="mt-[12px] ml-[8px] text-[black] font-semibold">
                Verify Doctor
              </p>
            </div>
          </Link>
          <Link to="/patient">
            <div className="upload  bg-[#497FAB33] mt-[20px] h-[50px] border-1 border-black flex font-semibold  hover:bg-[#4997ab8f]">
              <img
                src="/Images/report.png"
                alt="verify"
                className="h-[30px] mt-[10px] ml-[10px]"
              />
              <p className="mt-[12px] ml-[8px] text-[black]">Upload Report</p>
            </div>
          </Link>
          <Link to="/adminnews">
            <div className="news bg-[#497FAB33] mt-[20px] h-[50px] border-1 border-black flex  hover:bg-[#4997ab8f]">
              <img
                src="/Images/news.png"
                alt="verify"
                className="h-[30px] mt-[10px] ml-[10px]"
              />
              <p className="mt-[12px] ml-[8px] text-[black] font-semibold">
                News|Event
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
