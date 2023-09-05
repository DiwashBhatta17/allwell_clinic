import React from "react";
import { useState, useEffect } from "react";
import "./AdminLanding.css";
import { Link } from "react-router-dom";
import Navbar from "./Adminnavbar";
import axios from "axios";
export default function Landingpage(props) {
  const [patientno, setPatientno] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/patient/lget-all-patient")
      .then((response) => {
        setPatientno(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, []);

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // Make an Axios GET request to fetch the list of doctors
    axios
      .get("http://localhost:8081/doctor/list-all-doctor")
      .then((response) => {
        // Set the list of doctors in the state variable
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, []);

  const [appointmentno, setAppointmentno] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/appointment/today-count")
      .then((resp) => {
        setAppointmentno(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching data");
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="page ml-[200px] h-screen mt-[-600px] flex">
        <div className="p bg-[white] shadow-md shadow-blue-500 ml-[400px] h-[70px] w-[300px] text-center font-semibold text-[26px]">
          {" "}
          Admin Dashboard
        </div>
        <div className="Totalpt bg-[#fcfcfc] h-[300px] w-[270px] shadow-md shadow-blue-500 ml-[-570px] mt-[750px] rounded-[10px] text-center text-[20px] font-semibold pt-[30px] flex justify-center">
          <p className="ml-[-60px]">Total Patients</p>
          <p className="docno mt-[100px] ml-[-80px] text-[40px]">
            {patientno.length}
          </p>
        </div>
        <div className="Totalpt bg-[#fcfcfc] h-[300px] w-[270px] shadow-md shadow-blue-500 ml-[300px] mt-[750px] rounded-[10px] text-center text-[20px] font-semibold pt-[30px] flex justify-center">
          <p className="ml-[-60px]">Total Doctors</p>
          <p className="docno mt-[100px] ml-[-80px] text-[40px]">
            {doctors.length}
          </p>
        </div>
        <div className="Totalpt bg-[#fcfcfc] h-[300px] w-[270px] shadow-md shadow-blue-500 ml-[-553px] mt-[950px] rounded-[10px] text-center text-[20px] font-semibold pt-[30px] flex justify-center">
          <p className="ml-[-60px]">Total Appointments</p>
          <p className="docno mt-[100px] ml-[-80px] text-[40px]">
            {appointmentno.length}
          </p>
        </div>
      </div>
    </>
  );
}
