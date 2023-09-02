import React from "react";

import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";



function SecondAppointmentForm(promps) {
  const {formData, handelchange, handelsubmit, setForm1visible, setForm2visible, formError} = promps;


  const serviceCategories = [
    "Select Service Category",
    "Whole Body Checkup",
    "Vaccination",
    "Dental Care",
    "Eye Examination",
    // Add more categories as needed
  ];

  const timeslots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "14:00",
    "16:00",
    "17:00",
  ];

  function handleBack(){
    setForm1visible(true);
    setForm2visible(false);
  }
  return (promps.form2visible)?
    <div>
      <UserNavbar />
      
      <div className="flex flex-col justify-center items-center min-h-screen text-center my-5">
      <div className="mb-[30px]">
        <h1 className="text-3xl font-bold text-[#170F49]">Your Appointments</h1>
        <p>
          Please fill the form below to book an appointment. <br />
          Please add all the details required.
        </p>
        <div className=" text-center  rounded-lg alert-danger" role="alert">
            {formError}
          </div>
      </div>
        <div className="bg-[#FAF8F8] p-4 px-5 rounded-[20px]">
          <div className="my-5">
            <h1 className="text-2xl font-bold text-[#170F49] mb-2">
              Changed Details
            </h1>
            <p className="mb-2">
              Please fil your information so we can get in touch with you.
            </p>
            <hr />
          </div>
          <div className="text-left" type="post">
            <div className="flex flex-col ">
              {/* Service Categorie */}
              <label htmlFor="name" className="font-bold text-black">
                Service Categorie
              </label>
              <select
                className=" shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handelchange}
              >
                {serviceCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* For Symptoms */}

            <div className="flex flex-col mt-3 ">
              <label htmlFor="name" className="font-bold text-black">
                Symptoms
              </label>
              <input
                className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
                type="text"
                name="symptoms"
                placeholder="  Whats your Symptoms"
                value={formData.symptoms}
                onChange={handelchange}
                
              />
            </div>
            {/* For the time Slot */}

            <div className="flex flex-col mt-3 ">
              <label htmlFor="name" className="font-bold text-black">
                Time Slot
              </label>
              <select
                className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
                type="text"
                name="timeslot"
                value={formData.timeslot}
                onChange={handelchange}
              >
                 {timeslots.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            

            <div className="flex flex-col mt-3 ">
              <label htmlFor="name" className="font-bold text-black">
                Visit Date
              </label>
              <input
                className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handelchange}
              />
            </div>

            <div className="mt-5 flex justify-between">
              <button onClick={handleBack} to="/"
                className="border px-5 py-2 rounded-full bg-[#497FAB] text-white"
                type="submit"
              >
                Back
              </button>
              <button onClick={handelsubmit}
                className="border px-5 py-2 rounded-full bg-[#497FAB] text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </div>
  : "";
}

export default SecondAppointmentForm;
