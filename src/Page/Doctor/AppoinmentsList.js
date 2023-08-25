import React, { useState } from "react";
import Navbar from "./Navbar";
import PatientInfo from "./PatientInfo";

function AppoinmentsList() {
    const [getTrigger, setTrigger]= useState(false);
  return (

    
    <>
      <Navbar />
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
            
              <tr>
                
                <th scope="row">1</th>
                <td><button onClick={()=>setTrigger(true)}>Mark</button></td>
                <td>2023-Aug-04</td>
                <td>Physically</td>
                
              </tr>
             
            

            
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>2023-Aug-04</td>
                <td>Online</td>
              </tr>
            

            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PatientInfo statuse={getTrigger} setTrigger={setTrigger}/>
    </>
  );
}

export default AppoinmentsList;
