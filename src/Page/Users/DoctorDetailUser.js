import React from "react";
import doctorimg from "./UserImages/Bitmap.png";
import icon1 from "./UserImages/service-1-icon.png";
import icon2 from "./UserImages/service-2-icon.png";
import icon3 from "./UserImages/service-3-icon.png";
import UserFooter from "./UserFooter";
import UserNavbar from "./UserNavbar";

function DoctorDetailUser() {
  let doctorDetails = {
    name: "Dr. Sameer Thapa",
    about:
      "Doctor  is a top specialist at London Bridge Hospital at London. He has achieved several awards and recognition for is contribution and service in his own field. He is available for private consultation. ",
    experience: "10 +",
    phone: "(977) 98123456789",
    email: "samirthapa@allwillclinic.hp.np",
    whatsapp: "98123456789",
    image: doctorimg,
    patientno: "1000 +",
  };
  return (
    <>
    <UserNavbar/>
      {/* component 1  */}
      <div>
        <div className="flex mt-5  justify-around ">
          {/* image part div */}
          <div>
            <img className="rounded-full" src={doctorDetails.image} alt="" />
            <h1 className="justify-center flex mt-3 text-2xl font-bold">
              {doctorDetails.name}
            </h1>
          </div>

          {/* About us part Div */}
          <div className="w-[40%] mt-2">
            <h1 className="text-2xl font-bold">About {doctorDetails.name}</h1>
            <p className="my-2">{doctorDetails.about}</p>
            <button className="mt-5 border px-5 py-2 rounded-full bg-[#497FAB] text-white">
              Book Appointments
            </button>
          </div>
        </div>
      </div>
      {/* comma */}
     

      <div className="mt-[100px]">
        <div className="flex justify-around">
          <div className="shadow-2xl w-[16%] text-center">
            <div className="h-[153px] items-center justify-center flex ">
              <img className="" src={icon1} alt="" />
            </div>
            <div className="text-xl font-bold">{doctorDetails.patientno}</div>
            <p>Patients</p>
          </div>

          <div className=" shadow-2xl w-[16%] text-center">
            <div className="h-[153px] items-center justify-center flex ">
              <img className="" src={icon2} alt="" />
            </div>
            <div className="text-xl font-bold">{doctorDetails.experience}</div>
            <p>Experiences</p>
          </div>

          <div className="shadow-2xl w-[16%] text-center">
            <div className="h-[153px] items-center justify-center flex ">
              <img className="" src={icon3} alt="" />
            </div>
            <div className="text-xl font-bold">Well Liked</div>
            <p>Doctor</p>
          </div>
        </div>
      </div>

      {/* comp 3 */}

      <div className="mt-[100px] ml-[120px] mb-[100px]">
        <div className="flex text-3xl mb-3 gap-4 ">
          <i className="fa-solid fa-phone-volume mt-2 text-[#497FAB]"></i>
          <p>{doctorDetails.phone}</p>
        </div>
        <div className="flex text-3xl mb-3 gap-4">
          <i className="text-[#497FAB] mt-2 fa-solid fa-envelope"></i> 
          <p>{doctorDetails.email}</p>
        </div>
        <div className="flex text-3xl  mb-3 gap-4">
          <i className="text-[#497FAB] fa-brands mt-2 fa-whatsapp"></i>
          <p>{doctorDetails.whatsapp}</p>
        </div>
      </div>
      <UserFooter/>
    </>
  );
}

export default DoctorDetailUser;
