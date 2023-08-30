import React, { useEffect, useState } from "react";

import patientinfoservice from "../../Services/DoctorService/patientinfoservice";

function PatientInfo(props) {
  const [list, setList] = useState([]);
  const aid = props.appointmentId;

  async function fetchData() {
    try {
      const response = await patientinfoservice(aid);
      setList(response);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    if (aid !== null) {
      fetchData();       
    }
  }, [aid]);

  return props.statuse ? (
    <div className="flex w-full top-0 left-0 justify-center fixed items-center h-screen dhamilo">
      <div className="pt-2 pl-2 bg-white shadow-lg h-[400px] rounded-[10px] ">
        <div className=" text-right text-xl mr-2 ">
          <button onClick={() => props.setTrigger(false)}>
            <i className="fa-solid fa-xmark rounded-full hover:text-[#497FAB] p-1 "></i>
          </button>
        </div>
        <div className="m-4">
          <div className="flex">
            <div>
              {/* Conditionally render patient name and category */}
              {list.patient && (
                <>
                  <h1 className="text-2xl font-bold text-[#497FAB]">
                    {list.patient.patientName}
                  </h1>
                  <p className="mt-2">{list.category}</p>
                </>
              )}
            </div>
            <div className="ml-[160px] mt-2">
              {/* Conditionally render contact details */}
              {list.patient && (
                <>
                  <i className="fa-solid fa-phone text-[#497FAB] text-xl mr-2 mb-1"></i>{" "}
                  {list.patient.phone} <br />
                  <i className="fa-solid fa-envelope text-[#497FAB] text-xl mr-2"></i>{" "}
                  {list.patient.email}
                </>
              )}
            </div>
          </div>

          <div className="mt-4 text-2xl text-[#497FAB] ">
            <i className="fa-solid fa-clipboard mr-3"></i>Symptoms
          </div>
          <div className="mt-2 h-[90px] w-[50vh]">
            {/* Conditionally render symptoms */}
            {list.appointmentDescription ? (
              <p>{list.appointmentDescription}</p>
            ) : (
              <p>No symptoms available</p>
            )}
          </div>
          <div className="mt-4">
            <h1 className="font-bold">Visit Date</h1>
            {/* Conditionally render visit date */}
            {list.appointmentDate ? (
              <p className="mt-1">{list.appointmentDate} {list.appointmentTime} Physical</p>
            ) : (
              <p>No visit date available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}



export default PatientInfo;
