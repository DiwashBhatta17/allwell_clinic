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
      console.log("is not valid")
      setFormError("All fields are required");
      return false;
    }
    else{
      return true;
    }
  }
}

  function handelchange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handelsubmit() {
    const data = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,
      dateOfBirth: formData.date,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.timeslot,
      appointmentDescription: formData.symptoms,
      category: formData.serviceCategory,

      
    };
    console.log(data);

    if (isFormValid()) {
      try {
        const response = await appointmentService(data, userId, id);
        console.log("response",response);
      } catch (error) {
        console.error(error);
      }
    } else{
      console.log("Form not valid")
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
