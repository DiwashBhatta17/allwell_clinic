import React, { useEffect, useState } from "react";
import img from "../UserImages/Bitmap.png";
import { Link } from "react-router-dom";
import { getDoctorlist } from "../../../Services/User/doctorlist";

function ThirdComp() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorlist().then((doctors) => {
      setDoctorList(doctors);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl text-[#497FAB]">OUR TEAM MEMBERS</h1>
      </div>
      <div className="flex flex-wrap justify-center mx-[120px] gap-x-5 mt-5 ">
        {doctorList.map((value, index) => (
          <div
            key={index}
            className="border shadow-xl w-[360px] my-5 text-center"
          >
            <Link to={`/doctordetailuser/${value.doctorId}`}>
              {" "}
              <img className="w-full h-[260px]" src={img} alt="img" />
              <div>
                <h1 className="mt-2">{value.doctorName}</h1>
                <h1 className="text-xl mt-1 ">Sr. Doctor</h1>
              </div>
            </Link>
            <div className="my-1 gap-1 text-xl ">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="  mx-2 fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ThirdComp;
