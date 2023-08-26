
import React, { useState } from "react";

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

  const [form1visible, setForm1visible] = useState(true);
  const [form2visible, setForm2visible] = useState(false)

  function handelchange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handelsubmit(){
    console.log(formData);
  }
  
  
  return (
   <>
    <FirstAppForm formData={formData} handelchange={handelchange} form1visible={form1visible} setForm1visible={setForm1visible} setForm2visible={setForm2visible}/>
    <SecondAppointmentForm formData={formData} handelchange={handelchange} form2visible={form2visible} setForm2visible={setForm2visible} setForm1visible={setForm1visible} handelsubmit={handelsubmit}/>
         
   
   </>
  )
}

export default AppointmentFormControl;
