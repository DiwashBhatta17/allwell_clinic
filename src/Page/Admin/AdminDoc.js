import React from "react";
import "./AdminDoc.css";
import Navbar from "./Adminnavbar";
import axios from "axios";

import { useState, useEffect } from "react";
import unverifiedDoctor, {
  verifyDoctor,
} from "../../Services/Admin/unverifiedDoctor";

export default function AdminDoc() {
  const [isVerified, setIsVerified] = useState(false);
  const [list, setList] = useState(["", "", ""]);

  async function fetchData() {
    try {
      const response = await unverifiedDoctor();
      setList(response);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);
  async function doctorVerify(doctorId) {
    try {
      const response = await verifyDoctor(doctorId);
      console.log("Response", response);
    } catch (error) {
      console.error("Cause an error", error);
    }
    window.location.reload();
  }
  return (
    <>
      <Navbar />
      <div className="vd bg-[white] w-[300px] h-[90px] shadow-md mt-[30px]  ml-[300px] shadow-black text-center text-[40px]">
        Verify Doctor
      </div>
      <div className="container ml-[250px] h-[370px] w-[1000px] border-1 border-black mt-[20px] flex">
        {list.map((value, index) => (
          <div key={index}>
            <div className=" border-2 border-blue-400 h-[150px] w-[200px] ml-[70px] text-center mt-[70px]">
              <div className="dn bg-[white] shadow-md shadow-blue-900 text-center font-black mt-2">
                {value.username}
              </div>
            </div>
            <button
              onClick={() => doctorVerify(value.doctorId)}
              className="bg-[#4783a8] text-white px-5 py-2 rounded-3xl mt-[10px] ml-[100px]"
            >
              Verify
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
