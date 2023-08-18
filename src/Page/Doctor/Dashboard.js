import React from "react";
import Navbar from "../Navbar";

function Dashboard() {
  let greeding = "Good Afternoon";
  let name = "Dr Shaun Murphy";
  
  //Backend datas goes here 

  let datas ={
    patients: 82,
    appoinments: 42,
    online: 24,
    offline: 34
  }
  return (
    <>
      <Navbar />
      <div className="mt-3 ml-[98px] ">
        <h1 className="text-2xl font-bold flex">
          <p className="text-[#497FAB]">{greeding}</p>, {name} !
        </h1>
        <br></br>
        <div className="">
          <button className="border text-white bg-[#497FAB] hover:border-1 hover:text-black px-4 py-1 rounded-full">
            View Patients
          </button>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold flex">Weekely Report</h1>
          <div className="mt-5">

{/* Carts up section */}

            <div className="row">
              <div className="col-4">
                <div className="items-center">
                  <div className="card shadow w-[39%]">
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
              </div>
              <div className="col-4">
                <div className="items-center">
                  <div className="card shadow w-[39%]">
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
            </div>




{/* Carts Down Section */}
            <div className="row mt-5">
              <div className="col-4">
                <div className="items-center">
                  <div className="card shadow w-[39%]">
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
              </div>
              <div className="col-4">
                <div className="items-center">
                  <div className="card shadow w-[39%]">
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
      </div>
    </>
  );
}

export default Dashboard;
