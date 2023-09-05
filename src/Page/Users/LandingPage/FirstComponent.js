import React, { useEffect } from "react";
import UserNavbar from "../UserNavbar";

import Firstimg1 from "../UserImages/landingpageimg1.png";
import SecontComponent from "./SecontComponent";
import UserFooter from "../UserFooter";
import Login from "../../Login/Login";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../../components/State/slice/counterSlice";

function FirstComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token === null) {
      dispatch(logoutsuccess());
    }
  }, []);
  return (
    <>
      <UserNavbar />
      <div className="rounded-br-[300px]  bg-[#c0bdbd] bg-opacity-20">
        <div className="flex mx-[120px]">
          <div className="div1">
            <div className="text-2xl opacit text-[#497FAB] font-bold mt-4">
            स्वास्थ्य नै धन हो
            </div>
            <div className="text-3xl mt-2 opacity-[100] text-[#497FAB]">
              हजुरको स्वास्थ्य, हाम्रो प्राथमिकता
            </div>
            <div className=" mt-5">
              <p>
              All Well Clinic सर्वसुलभ एवं गुणस्तरीय विशेषज्ञ स्वास्थ्य सेवाको लागि सुपरिचित छ ।
               <br />
               अन्तराष्ट्रिय स्वास्थ्य सेवा अब हजुरकै बुधबारे मा, दक्ष्य चिकित्सक सदैव हजुरहरुको सेवामा ।
              </p>
            </div>
            <div className="mt-4 ">
              <Link
                to="/doctorlist"
                className="border-2 bg-[#497FAB] px-4 py-1 text-white rounded-full"
              >
                दर्ता गर्नुहोस
              </Link>
            </div>
          </div>
          <div className="div2  rounded-br-[20px]">
            <img
              className="rounded-br-[120px] rounded-tr-none "
              src={Firstimg1}
              alt=""
            />
          </div>
        </div>
      </div>
      <SecontComponent />
      <UserFooter />
    </>
  );
}

export default FirstComponent;
