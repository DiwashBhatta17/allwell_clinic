import React, { useEffect, useState } from "react";
import img from "../UserImages/Bitmap.png";
import { Link } from "react-router-dom";
import { getDoctorlist } from "../../../Services/User/doctorlist";
import { doctorImgGetService } from "../../../Services/DoctorService/doctorImgUpdateService";

function ThirdComp() {
  const [doctorList, setDoctorList] = useState([]);

  async function fetchImage() {
    try {
      const response = await getDoctorlist();
      if (response) {
        for (let i = 0; i < response.length; i++) {
          let imageUrl = await getProfileImg(response[i]?.doctorId);
          response[i]["imgUrl"] = imageUrl;
        }
        setDoctorList(response);
      }
    } catch (error) {
      console.error("Cannot get the News", error);
    }
  }

  useEffect(() => {
    fetchImage()
  }, []);
  console.log("doctor list", doctorList[0]);

  async function getProfileImg(userId) {
    try {
      const response = await doctorImgGetService(userId);
      return URL.createObjectURL(response); // Assuming response.data is the image blob
    } catch (error) {
      console.error("Error fetching profile image", error);
    }
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl text-[#497FAB]">डाक्टरहरु</h1>
      </div>
      <div className="flex flex-wrap justify-center mx-[120px] gap-x-5 mt-5 ">
        {doctorList.map((value, index) => (
          <div
            key={index}
            className="border shadow-xl w-[360px] my-5 text-center"
          >
            <Link to={`/doctordetailuser/${value.doctorId}`}>
              {" "}
              <img className="w-full h-[260px]" src={value.imgUrl} alt="img" />
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
