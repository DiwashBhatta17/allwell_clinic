import React, { useEffect, useState } from "react";

import PatientInfo from "./PatientInfo";
import DoctorNavbar from "./doctorNavbar";
import doctordashboardservice from "../../Services/DoctorService/Dashboard/doctordashboardservice";
import { Link, useParams } from "react-router-dom";

function AppoinmentsList() {
  const [getTrigger, setTrigger] = useState(false);
  const [appoinments, setAppointments] = useState([]);
  const [appoinmentId, setAppointmentId] = useState();

  useEffect(() => {
      async function fetchData() {
          try {
              const id = sessionStorage.getItem('userId');
              const response = await doctordashboardservice(id);
              console.log(response);
              setAppointments(response);
          } catch (error) {
              console.log(error);
          }
      }
      fetchData();
  }, [])

  function handleClick(appId) {
      // Use the appointmentId or other logic as needed
      setTrigger(true);
      setAppointmentId(appId);
  }
  return (

    
    <>
      <DoctorNavbar/>
      <div className="mt-3 ml-[98px]">
        <h1 className="text-3xl font-bold mb-2">Appointment List</h1>
        <hr className="w-[91%] mb-3" />

        <table className="table table-striped table-hover w-[91%]">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Meeting Time</th>
              <th scope="col">Appointment</th>
            </tr>
          </thead>
          <tbody>
            {
              appoinments.map((value, index)=>(
                <tr key={index}>
               
                        <th scope="row">{value.appointmentId}</th>
                        <td><button onClick={() => handleClick(value.appointmentId)}>{value.patient.patientName}</button></td>
                        <td><button onClick={() => handleClick(value.appointmentId)}>{value.appointmentDate}</button></td>
                        <td><button onClick={() => handleClick(value.appointmentId)}>{value.category}</button></td>
                    
                 
              </tr>

              ))
            }
            
          </tbody>
        </table>
      </div>
      <PatientInfo statuse={getTrigger} appointmentId={appoinmentId}  setTrigger={setTrigger}/>
      
     
    </>
  );
}

export default AppoinmentsList;
