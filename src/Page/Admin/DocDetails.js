import React from "react";

export default function DocDetails() {
  return (
    <>
      <div>
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
      </div>
      <div className="upperbody h-[310px] flex">
        <img
          src="/Images/Doctor.png"
          alt="Doctors"
          className="docpic h-[200px] mt-[40px]"
        />
        <div className="docname h-[30px] w-[250px] bg-[#497FAB] mt-[250px] ml-[-180px]"></div>

        <div className="docdept h-[200px] w-[320px] bg-[#fffffffe] ml-[180px] mt-[40px] rounded-[40px] shadow-md shadow-blue-500">
          <h1 className="dd text-center text-[white] mt-[20px] font-semibold w-[320px] h-[40px] bg-[#497FAB]">
            Doctor department
          </h1>
          <p className="p1 ml-[30px] mt-[30px] text-[#497FAB] font-semibold">
            General Physician | Gastroenterology | Hepatology
          </p>
        </div>
        <div className="docqual  h-[200px] w-[320px] bg-[#fffffffe] ml-[120px] mt-[40px] rounded-[40px] shadow-md shadow-blue-500">
          <h1 className="qual text-center text-[white] mt-[20px] font-semibold w-[320px] h-[40px] bg-[#497FAB]">
            Doctor Qualification
          </h1>
          <p className="p2 ml-[20px] mt-[30px] text-[#497FAB] font-semibold">
            Qualification : MD (Internal Medicine), PHD (Gastroenterology &
            Hepatology)
          </p>
        </div>
      </div>
      <div className="middlebody h-[600px] ">
        <div className="time  h-[90px] w-[320px] bg-[#fffffffe] ml-[570px] mt-[-60px] shadow-md shadow-blue-500">
          <h1 className="avai text-center text-[white] mt-[20px] font-semibold w-[320px] h-[40px] bg-[#497FAB]">
            Availability
          </h1>
          <p className="p3 font-semibold text-[#497FAB] ml-4">
            Schedule : Sun - Fri : 5:30 pm to 8 pm
          </p>
        </div>
        <br />
        <hr />
        <div className="docstats h-[470px] w-[420px] bg-[#ffffff4e] ml-[20px] mt-[40px] shadow-md shadow-blue-500 rounded-[60px] flex ">
          <div className="monthly text-center text-[white] font-semibold w-[420px] h-[60px] mt-[20px] bg-[#497FAB] rounded-[10px]">
            <p className="p4 mt-[10px] font-semibold">
              {" "}
              Doctor's Monthly report
            </p>
          </div>
        </div>
        <div className="present">
          {" "}
          <img
            src="Images/present.png"
            alt="present"
            className="present h-[160px] mt-[-400px] ml-[30px]"
          />
          <div className="prnum h-[30px] w-[110px] bg-[#497FAB] ml-[50px]"></div>
          <img
            src="Images/absent.png"
            alt="absent"
            className="absent h-[120px] mt-[-160px] ml-[290px]"
          />
          <div className="abnum h-[30px] w-[110px] bg-[#497FAB] ml-[297px] mt-[10px]"></div>
          <img
            src="/Images/treated.png"
            alt="Treated"
            className="treat h-[110px] mt-[-4px] ml-[160px]"
          />
          <div className="abnum h-[30px] w-[110px] bg-[#497FAB] ml-[167px] mt-[10px]"></div>
        </div>
        <div className="Tschedule bg-[#ffffff] h-[320px] w-[350px] ml-[800px] mt-[-300px] rounded-[10px] shadow-md shadow-blue-500 flex">
          <img
            src="/Images/schedule.png"
            alt="schedule"
            className="im h-[20px] mt-[80px] ml-[90px] "
          />
          <div className="time1 h-[30px] w-[100px] bg-[#ffffff] mt-[200px] shadow-md shadow-blue-500 ml-[20px] ">
            <p className="hrs text-[#497FAB] text-center">11:00 Am</p>
          </div>
          <div className="time2 h-[30px] w-[100px] ml-[-220px] bg-[#ffffff] mt-[200px] shadow-md shadow-blue-500 ">
            <p className="hrs text-[#497FAB] text-center">9:00 Am</p>
          </div>
          <div className="times h-[30px] w-[100px] bg-[#ffffff] mt-[260px] shadow-md shadow-blue-500 ">
            <p className="hrs text-[#497FAB] text-center">12:00 Am</p>
          </div>
        </div>
        <div className="sched bg-[#497FAB] h-[40px] w-[350px] ml-[800px] mt-[-310px]">
          <p className="ts text-white font-semibold text-center">
            Today's Schedule
          </p>
        </div>
      </div>
    </>
  );
}
