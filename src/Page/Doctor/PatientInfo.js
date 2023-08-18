import React from "react";

function PatientInfo(props) {
  return (props.statuse)? (
    <div className="flex w-full top-0 left-0 justify-center fixed items-center h-screen dhamilo">
      <div className="pt-2 pl-2 bg-white shadow-lg rounded-[10px] ">
      <div className=" text-right text-xl mr-2 "><button onClick={()=>props.setTrigger(false)}><i className="fa-solid fa-xmark rounded-full hover:text-[#497FAB] p-1 "></i></button></div>
        <div className="m-4">
           
        <div className="flex">
          
          <div>
            <h1 className="text-2xl font-bold text-[#497FAB]">Dil Bahadhur Thapa</h1>
            <p className="mt-2">Whole Body Checkup</p>
          </div>
          <div className="ml-[160px] mt-2">
            <i className="fa-solid fa-phone text-[#497FAB] text-xl mr-2 mb-1"></i> +977 987654321 <br />
            <i className="fa-solid fa-envelope text-[#497FAB] text-xl mr-2"></i> dilbahadur2002@gmail.com
          </div>
        </div>

        <div className="mt-4 text-2xl text-[#497FAB] ">
          <i className="fa-solid fa-clipboard mr-3"></i>Symptoms
        </div>
        <div className="mt-2 w-[50vh]">
          <p>
            Headache, pain in chest ,vomiting ,fever difficult in breathing,
            haat dukhxa nasa taniyeako jasto hunxa.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold">Visit Date</h1>
          <p className="mt-1">2023-August-5 09:15AM Physical</p>
        </div>
      </div>
      </div>
    </div>
  ): "";
}

export default PatientInfo;
