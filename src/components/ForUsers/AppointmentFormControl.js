import React, { useState } from "react";

import FirstAppForm from "../../Page/Users/AppointmentForm/FirstAppForm";
import SecondAppointmentForm from "../../Page/Users/AppointmentForm/SecondAppointmentForm";
import appointmentService from "../../Services/User/appointmentService";
import { useParams } from "react-router-dom";

function AppointmentFormControl() {
  const userId = sessionStorage.getItem("userId");
  // const { doctorId } = useParams();
  const {id} = useParams();
  
  

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
  const [form2visible, setForm2visible] = useState(false);

  const [formError, setFormError] = useState("");



const isFormValid = () => {
  const requiredFields = [
    "name",
    "phone",
    "email",
    "date",
    "serviceCategory",
    "symptoms",
    "timeslot",
    "appointmentDate",
  ];


  for (const field of requiredFields) {
    if (formData[field].trim() === "") {
      setFormError("All fields are required");
      return false;
    }
    
  }
}

  function handelchange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handelsubmit() {
    const data = {
      appointmentDate: formData.date,
      appointmentTime: formData.timeslot,
      appointmentDescription: formData.symptoms,
      appointmentStatus: formData.serviceCategory,
      followUpDateAndTime: "2024-01-07",
    };
    console.log(formData);

    if (isFormValid()) {
      try {
        const response = await appointmentService(data, userId, id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

   
  }

  return (
    <>
      <FirstAppForm
        formError = {formError}
        formData={formData}
        handelchange={handelchange}
        form1visible={form1visible}
        setForm1visible={setForm1visible}
        setForm2visible={setForm2visible}
      />
      <SecondAppointmentForm
       formError = {formError}
        formData={formData}
        handelchange={handelchange}
        form2visible={form2visible}
        setForm2visible={setForm2visible}
        setForm1visible={setForm1visible}
        handelsubmit={handelsubmit}
      />
    </>
  );
}

export default AppointmentFormControl;
