import React, { useEffect, useState } from "react";
import DoctorNavbar from "./doctorNavbar";
import { Link } from "react-router-dom";
import doctordashboardservice from "../../Services/DoctorService/Dashboard/doctordashboardservice";

function Doctordashboard() {
  let greeding = "Good Afternoon";
  let name = "Dr Shaun Murphy";

  const [appoinments ,setAppointments] = useState([]);


  useEffect(()=>{
    async function fetchData(){
      try {
        const id = sessionStorage.getItem('userId');
        const response= await  doctordashboardservice(id);
        console.log(response);
        setAppointments(response);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData();
  },[])
  
  //Backend datas goes here 

  let datas ={
    patients: 82,
    appoinments: appoinments.length,
    online: 24,
    offline: 34
  }
  return (
    <>
      <DoctorNavbar/>
      <div className="mt-5 mx-[150px] ">
        <h1 className="text-2xl font-bold flex">
          <p className="text-[#497FAB]">{greeding}</p>, {name} !
        </h1>
        <br></br>
        <div className="mt-3">
          <Link to="/doctorHistory" className="border text-white bg-[#497FAB] hover:bg-[#5b7cb9] hover:text-black px-4 py-1 rounded-full">
            View Patients
          </Link>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold flex">Weekely Report</h1>
          <div className="mt-5">

{/* Carts up section */}

            <div className=" flex justify-around">
              
                <div className="items-center">
                  <div className="card shadow w-[200px]">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-xl font-bold text-center ">
                        Total Patients
                      </li>

                      <li className="list-group-item text-4xl font-bold text-[#497FAB] text-center my-4 ">
                        {datas.patients}
                      </li>
                    </ul>
                  </div>
                </div>
              
              
                <div className="items-center">
                  <div className="card shadow w-[200px]">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-xl font-bold text-center ">
                        Appoinments
                      </li>

                      <li className="list-group-item text-4xl font-bold text-[#497FAB] text-center my-4 ">
                        {datas.appoinments}
                      </li>
                    </ul>
                  </div>
                </div>
              
            </div>




{/* Carts Down Section */}
            <div className=" mt-5 flex justify-around mb-5">
              
                <div className="items-center">
                  <div className="card shadow w-[200px]">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-xl font-bold text-center ">
                        Online Consutants
                      </li>

                      <li className="list-group-item text-4xl font-bold text-[#497FAB] text-center my-4 ">
                        {datas.online}
                      </li>
                    </ul>
                  </div>
                </div>
              
              
                <div className="items-center">
                  <div className="card shadow w-[200px]">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-xl font-bold text-center ">
                        Offline Conlultants
                      </li>

                      <li className="list-group-item text-4xl font-bold text-[#497FAB] text-center my-4 ">
                        {datas.offline}
                      </li>
                    </ul>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctordashboard;
