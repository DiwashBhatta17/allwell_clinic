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

  const [patientdata, setpatientData] = useState([]); //in details part of the page
  const [fetchData, setFetchData] = useState(false);

  const handlePatientClickID = (patientId) => {
    setSelectedPatientId(patientId); // Set the selected patient's ID
  };

  async function createAReport(appId){
    try {
      const response = await createReport(appId);
      console.log("response",response);
      setReportId(response)
      
    } catch (error) {
      console.log(error)
      
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


  const [searchuser, setSearchuser] = useState("");
  const [patients, setPatients] = useState([]);

  const patientsLength = patients.length;

  const [patientdata, setpatientData] = useState([]); //in details part of the page
  const [fetchData, setFetchData] = useState(false);

  function datafetch() {
    axios.get("http://localhost:8081/patient/get-all-patient").then((resp) => {
      setpatientData(resp.data);
    });
  }

  function createReport() {
    axios.post("http://localhost:8081/reports/create-report/"); //when upload is clicked post.
  }

  


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
      <div className="Manage h-[60px] w-full md:w-[800px] bg-white shadow-md shadow-blue-500 mx-4 md:ml-[220px] mt-[40px]">
        <p className="mp text-center text-[#497FAB] font-semibold text-xl md:text-2xl">
          Manage and Get Updates about your Patients.
        </p>
      </div>
      <div className="body md:h-[800px] mt-8 md:mt-[60px] flex flex-col md:flex-row">
        <div className="logpatient h-[300px] w-full md:w-[350px] bg-white shadow-md shadow-blue-500 md:ml-[840px] mb-4 md:mb-0">
          <div className="ldp h-[60px] w-[350px] mt-[170px] bg-[#497FAB]">
            <p className="lip text-[white] text-center font-semibold ">
              Logged in patients
            </p>
          </div>
          <p className="num text-black text-[30px] ml-[150px]">
            {patients.length}
          </p>
          <img
            src="Images/logged.png"
            alt="logged"
            className="log h-[120px] ml-[120px] mt-[-240px]"
          />
        </div>
        <div className="patientdet h-[480px] w-[400px] bg-white shadow-md shadow-blue-500 mt-[380px] ml-[-370px] rounded-[20px]">
          <div className="pdetails h-[60px] w-[400px] bg-[#497FAB]  ml=[370px] rounded-t-[10px] flex">
            <p className="pd text-white text-center font-semibold mt-[10px] ml-[140px]">
              {patientdata.map((patient) => (
                <div key={patient.patientId}>
                  <p>{patient.patientName}</p>
                  <p>{patient.patientId}</p>
                </div>
              ))}
              {/* {selectedUser ? (
                <div>
                  <p>{selectedUser.patientName}</p>
                  <p>{selectedUser.patientId}</p>
                </div>
              ) : (
                <p>Select a user to see details.</p>
              )} */}
            </p>
          </div>
          {/* <div className="bio h-[160px] w-[230px] bg-[white] shadow-md shadow-blue-500 mt-[20px] ml-[130px] text-[#497FAB] font-semibold text-center"></div> */}
          <div className=" h-[130px]  bg-[white] shadow-md shadow-blue-50  ml-[0px] text-[#497FAB] font-semibold text-center">
            <table className="table-primary table table-striped w-[398px]">
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
                        <button onClick={()=>uploadReport(value.appointmentId)} className="bg-[#1b9ce7] text-white px-1 py-1 rounded-lg">Upload</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          
          {ispopup && <Popup id={reportId} handlePopup={closePopup} />}
        </div>
        <div className="userlist h-[550px] w-[340px]  bg-[#ffffff] ml-[-1200px] mt-[00px] rounded-[30px] shadow-md shadow-blue-500">
          {" "}
          <div className="input bg-[#497FAB] w-[340px] h-[60px] rounded-t-[10px] flex ">
            <img
              src="/Images/search.png"
              alt="search"
              className="sear h-[20px] ml-[62px] mt-[20px]"
            />
            <input
              type="text"
              className="ip bg-[#fffffff1] mt-[19px] ml-[0px] h-[20px] w-[190px] text-[#497FAB]"
              value={searchuser}
              onChange={(event) => setSearchuser(event.target.value)}
            />
            {searchuser}
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
