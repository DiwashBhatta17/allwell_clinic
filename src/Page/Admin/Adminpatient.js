import React, { useState, useEffect } from "react";
import Navbar from "./Adminnavbar";
import Popup from "./Components/Popup";
import axios from "axios";
import Landingpage from "./Landingpage";

import getAppointmentlistfromPatientId from "../../Services/Admin/getAppointmentlistfromPatientId";
import { createReport } from "../../Services/Admin/uploadAfile";

export default function Patient() {
  const [ispopup, setIspopup] = useState(false);
  // State to store the selected patient
  const [selectedPatientId, setSelectedPatientId] = useState(null); // State to hold selected patient's ID
  const [report, setReport] = useState(""); // State to hold the report details
  const [appointmentlise, setAppointment] = useState([]);
  const [reportId, setReportId] = useState(null);
  

  const [searchuser, setSearchuser] = useState("");
  const [patients, setPatients] = useState([]);


  
  const [patientdata, setpatientData] = useState([]); 
  const [fetchData, setFetchData] = useState(false);

  const handlePatientClickID = (patientId) => {
    setSelectedPatientId(patientId); 
  };

  async function createAReport(appId) {
    try {
      const response = await createReport(appId);
      console.log("response", response);
      setReportId(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleuploadReport = () => {
    if (selectedPatientId) {
      axios
        .post(
          `http://localhost:8081/reports/create-report/${selectedPatientId}`
        )
        .then((response) => {
          // Handle the response (report details) here
          setReport(response.data);
        })
        .catch((error) => {
          console.error("Error creating report:", error);
        });
    } else {
      console.error("No patient selected.");
    }
  };

  // get Appointment list from patient
  async function getAppointmentList(patientId) {
    try {
      const response = await getAppointmentlistfromPatientId(patientId);
      console.log("Success", response);
      setAppointment(response);
    } catch (error) {
      console.error("Error", error);
    }
  }

  function uploadReport(appid) {
    setIspopup(true);
    createAReport(appid);
  }

  const closePopup = () => {
    setIspopup(false);
  };

  const patientsLength = patients.length;
  console.log("patient lengthis:", patientsLength);

  <Landingpage patientsLength={patientsLength} />;



  function handlePatientClick(patient) {
    getAppointmentList(patient.patientId);
    setpatientData([patient]); // Set the selected patient when clicked
    console.log("patient selected");
  }

  useEffect(() => {
    axios
      .get("http://localhost:8081/patient/get-all-patient")
      .then((resp) => {
        console.log("The response is:", resp.data);
        setPatients(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="body md:h-[800px] mt-8 md:mt-[60px] flex flex-col md:flex-row">
        <div className="patientdet h-[440px] w-[350px] bg-white shadow-md shadow-blue-500 mt-[40px] ml-[770px] rounded-[20px]">
          <div className="pdetails h-[60px]  bg-[#497FAB]  ml=[370px] rounded-t-[10px] flex text-[white] font-semibold p-[20px]">
            <p className="text-center ml-[90px] mt-[-10px] w-150px]">
              {" "}
              Appointments
            </p>
            <p className="pd text-white text-center font-semibold mt-[10px] ml-[140px]">
              {patientdata.map((patient) => (
                <div key={patient.patientId}>
                  <p>{patient.patientName}</p>
                  <p>{patient.patientId}</p>
                </div>
              ))}
            </p>
          </div>
          {/* <div className="bio h-[160px] w-[230px] bg-[white] shadow-md shadow-blue-500 mt-[20px] ml-[130px] text-[#497FAB] font-semibold text-center"></div> */}
          <div className=" h-[130px]  bg-[white] shadow-md shadow-blue-50  ml-[0px] text-[#497FAB] font-semibold text-center">
            <table className="table-primary table table-striped w-[350px]">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {appointmentlise &&
                  appointmentlise.map((value, index) => (
                    <tr key={index}>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>
                        <button
                          onClick={() => uploadReport(value.appointmentId)}
                          className="bg-[#1b9ce7] text-white px-1 py-1 rounded-lg"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {ispopup && <Popup id={reportId} handlePopup={closePopup} />}
        </div>
        <div className="userlist h-[550px] w-[340px]  bg-[#ffffff] ml-[-880px] mt-[00px] rounded-[30px] shadow-md shadow-blue-500 ">
          {" "}
          <div className="input bg-[#497fabdb] w-[340px] h-[60px] rounded-t-[10px] flex ">
            <img
              src="/Images/search.png"
              alt="search"
              className="sear h-[20px] ml-[62px] mt-[20px]"
            />
            <input
              type="text"
              className="ip bg-[#fffffff1] mt-[19px] ml-[0px] h-[20px] w-[190px] text-[#497FAB] rounded-[20px] text-center font-semibold"
              value={searchuser}
              onChange={(event) => setSearchuser(event.target.value)}
            />
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-gray-300 text-center">
                  Your Patient Lists
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#497FAB] text-[white] text-center">
              {patients
                .filter((patient) =>
                  patient.patientName
                    .toLowerCase()
                    .includes(searchuser.toLowerCase())
                )
                .map((patient) => (
                  <tr
                    key={patient.patientId}
                    className="hover:bg-blue-400 hover:cursor-pointer"
                  >
                    <td
                      className="p-2 border border-gray-300"
                      onClick={() => handlePatientClick(patient)}
                    >
                      {fetchData && (
                        <ul>
                          {appointmentlise.map((patient) => (
                            <li key={patient.patientId}>{}</li>
                            // Replace "patient.name" with the appropriate property from your patient object
                          ))}
                        </ul>
                      )}
                      {patient.patientName}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </>
  );
}
