import React from "react";

export default function News() {
  return (
    <>
      <div className="header bg-[#52363617] mt=[-40px] text-[#497FAB] flex items-center h-[80px]">
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
      <div className="Manage h-[60px] w-[800px] bg-[whiite] shadow-md shadow-blue-500 ml-[220px] mt-[40px]">
        <p className="mp text-center text-[#497FAB] font-semibold text-2xl">
          Manage and Get Upates about your Patients.
        </p>
      </div>
      <div className="lowercage border-2 border-black mt-[100px] h-[00px] ">
        <div className="up h-[400px] w-[400px] shadow-md shadow-blue-500 ml-[40px] mt-[30px] rounded-t-[20px] ">
          <div className="want bg-[#497FAB] w-[400px] rounded-t-[10px] h-[60px] text-[white] text-center font-semibold">
            Want to Update anything?
          </div>
          <img
            src="/Images/Add Link.png"
            alt="link"
            className="al h-[40px] ml-[40px] mt-[10px]"
          />
          <div className="addlink w-[120px] h-[40px] ml-[20px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center ">
            Addlink
          </div>
          <img
            src="/Images/addphoto.png"
            alt="addphoto"
            className="ap h-[140px] ml-[220px]"
          />
          <div className="addlink w-[320px] h-[40px] ml-[30px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center ">
            Add Details
          </div>
        </div>
        <div className="pd bg-[#497FAB] h-[30px] w-[120px] ml-[140px] mt-[20px] text-[white] text-center font-semibold">
          UPDATE
        </div>
        <div className="newsup h-[380px] w-[300px] shadow-md shadow-blue-500 ml-[880px] mt-[-450px] rounded-t-[20px]">
          <div className="nu bg-[#497FAB] h-[60px] w-[300px] ml-[0px] mt-[20px] text-[white] text-center font-semibold rounded-[10px]">
            <p>Update Page Info</p>
            <img
              src="/Images/home.png"
              alt="hIU"
              className="h-[30px] ml-[42px] mt-[-23px]"
            />
          </div>
          <img
            src="/Images/Vector.png"
            alt=""
            className="h-[120px] ml-[-30px] mb-[0px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-80px]">
            <input type="text" />
          </div>
          <img
            src="/Images/location.png"
            alt="location"
            className="h-[40px] mt-[50px] ml-[4px] "
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" />
          </div>
          <img
            src="/Images/mail.png"
            alt="mail"
            className="h-[30px] mt-[60px] ml-[10px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" />
          </div>

          <button className="b1 bg-[#497FAB] w-[200px] h-[30px] text-[white] text-center ml-[60px] mt-[40px] rounded-[20px]">
            Update Info
          </button>
        </div>
      </div>
    </>
  );
}
