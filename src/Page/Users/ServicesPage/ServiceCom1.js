import React from "react";
import UserNavbar from "../UserNavbar";
import img1 from "../UserImages/serviceImage.png";
import UserFooter from "../UserFooter";

import wholebody from '../UserImages/Group.png';
import vaccineimg from '../UserImages/vaccine.png';
import imagingimg from '../UserImages/x 1.png';
import minorimg from '../UserImages/surgery-PhotoRoom 1.png'


function ServiceCom1() {
  return (
    <>
      <UserNavbar />
      <div className="">
        <div className=" ">
          <img className="w-full" src={img1} alt="" />
        </div>
      </div>
      <div className="mt-[125px] flex justify-around  ">
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className="img h-[220px] items-center justify-center flex"><img src={wholebody} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">Whole Body Checkup</h1>
          <p className="mb-3  px-3">
            We provide a realiable, honest epair services ranging from simple
            preventative maintenance and troubleshooting, to more complicated
            component level and software related issue
          </p>
        </div>
        <div className="border w-[450px]   shadow-2xl text-center">
          <div className="img items-center justify-center flex h-[220px]"><img src={vaccineimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">Vaccination</h1>
          <p className="mb-3  px-3">
          We provide vaccination for Adults, Children, Students & Travelers to Nepal
          </p>
        </div>
      </div>

      <div className="mt-[125px] flex justify-around mb-5">
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className=" items-center justify-center flex h-[220px]"><img src={imagingimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">Imaging</h1>
          <p className="mb-3  px-3">
           We provide services like X-ray, Ecg
          </p>
        </div>
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className="img items-center justify-center flex h-[220px]"><img src={minorimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">Minor Procedures and Surgeries</h1>
          <p className="mb-3  px-3">
          We at AllWell provide minor procedures and surgeries. Please call or email us today to schedule a consult with a doctor or specialist regarding outpatient surgery.
          </p>
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default ServiceCom1;
