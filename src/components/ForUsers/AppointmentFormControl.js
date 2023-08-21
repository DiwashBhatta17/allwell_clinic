
import React, { useState } from "react";
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import FirstAppForm from "../../Page/Users/AppointmentForm/FirstAppForm";
import SecondAppointmentForm from "../../Page/Users/AppointmentForm/SecondAppointmentForm";

function AppointmentFormControl() {
   
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    serviceCategory: "",
    symptoms: "",
    timeslot: "",
    appointmentDate: "",
  });

  function handelchange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handelsubmit(){
    console.log(formData);
  }
  
  
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstAppForm formData={formData} handelchange={handelchange}/>} />
          <Route path="2" element={<SecondAppointmentForm formData={formData} handelchange={handelchange} handelsubmit={handelsubmit}/>} />
          {/* Other routes */}
        </Routes>
      </BrowserRouter>
   
   
   </>
  )
}

export default AppointmentFormControl;
