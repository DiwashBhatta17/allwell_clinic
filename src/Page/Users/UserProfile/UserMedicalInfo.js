import React, { useEffect, useState } from "react";

import patientinfoservice from "../../../Services/DoctorService/patientinfoservice";
import getReportsService from "../../../Services/forAll/getReportsService";

function UserMedicalInfo(props) {
    

  const [list, setList] = useState([]);
  const [reportss, setReport] = useState(null);


  const aid = props.appointmentId;

  async function getReport(){
    try {
        const response = await getReportsService(aid);
        console.log("success response",response);
        
          
        const imgSource = URL.createObjectURL(response);
        console.log("Success imagesource", imgSource);
        setReport(imgSource);
        
       
          
        
        
        
    } catch (error) {
        console.error("Failed",error)
        setReport(null);
        
    }
  }

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
      getReport();  
      return () => {
        if (reportss) {
          URL.revokeObjectURL(reportss);
        }
      };     
    }
  }, [aid]);

  function handleDownload() {
    // You can use the `download` attribute to specify the filename for the downloaded file.
    const link = document.createElement("a");
    link.href = reportss;
    link.download = "report.pdf"; // You can change the filename as needed.
    link.click();
  }

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
                    {list.name}
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
          <div className="flex justify-between items-center">
          <div className="mt-4">
            <h1 className="font-bold">Visit Date</h1>
            {/* Conditionally render visit date */}
            {list.appointmentDate ? (
              <p className="mt-1">{list.appointmentDate} {list.appointmentTime} Physical</p>
            ) : (
              <p>No visit date available</p>
            )}
          </div>
          <div>{reportss? <button onClick={handleDownload} className="bg-[#2be8e1] rounded-full mt-2 text-white px-5 py-2">Get Reports</button> : ""}</div>
         
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}



export default UserMedicalInfo;
