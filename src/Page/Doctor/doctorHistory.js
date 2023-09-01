import React, { useEffect, useState } from "react";
import DoctorNavbar from "./doctorNavbar";
import PatientInfo from "./PatientInfo";
import doctorHistoryservice from "../../Services/DoctorService/doctorHistoryservice";
import PatientInfoforHistory from "./patientInfoForhistory";

function DoctorHistory() {
  const [historyList, setHistoryList] = useState([]);
  const [appoinmentId, setAppointmentId] = useState();

  async function fetchdata() {
    try {
      const id = sessionStorage.getItem("userId");
      console.log(id);
      const response = await doctorHistoryservice(id);
      setHistoryList(response);
      console.table(historyList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  });
  function handleClick(appId) {
    setTrigger(true);
    setAppointmentId(appId);
  }

  const [getTrigger, setTrigger] = useState(false);
  return (
    <>
      <DoctorNavbar />
      <div className="mt-3 ml-[98px]">
        <h1 className="text-3xl font-bold mb-2">Your Patients</h1>
        <hr className="w-[91%] mb-3" />

        <table className="table table-striped table-hover w-[91%]">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Visit Date</th>
              <th scope="col">Appointment</th>
            </tr>
          </thead>
          <tbody>
            {historyList.map((value, index) => (
              <tr key={index}>
                <th scope="row">{value.appointmentId}</th>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.name}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.appointmentDate}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.category}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PatientInfoforHistory appointmentId={appoinmentId} statuse={getTrigger} setTrigger={setTrigger} />
    </>
  );
}

export default DoctorHistory;
