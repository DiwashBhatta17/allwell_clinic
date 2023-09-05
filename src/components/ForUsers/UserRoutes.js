import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstComponent from '../../Page/Users/LandingPage/FirstComponent';
import ServiceCom1 from '../../Page/Users/ServicesPage/ServiceCom1';
import AppointmentFormControl from './AppointmentFormControl';
import Login from '../../Page/Login/Login';
import Signup from '../../Page/Login/Signup';

function UserRoutes() {
  return (
    <div>
        
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstComponent/>} />
        <Route path="services" element={<ServiceCom1/>} />
        <Route path="appointment" element={<AppointmentFormControl/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default UserRoutes;
