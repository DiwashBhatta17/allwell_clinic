import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import FirstComponent from './Page/Users/LandingPage/FirstComponent';
import ServiceCom1 from './Page/Users/ServicesPage/ServiceCom1';
import AppointmentFormControl from './components/ForUsers/AppointmentFormControl';
import Login from './Page/Login/Login';
import Signup from './Page/Login/Signup';
import Otp from './Page/Login/Otp';
import DoctorLists from './Page/Users/DoctorLists';
import DoctorDetailUser from './Page/Users/DoctorDetailUser';
import News from './components/forAll/News';


const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <FirstComponent/>
  },
  {
    path: 'otp',
    element: <Otp/>
  },
  {
    path: 'service',
    element: <ServiceCom1/>
  },
  {
    path: 'appointment',
    element: <AppointmentFormControl/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'signup',
    element: <Signup/>
  },
  {
    path: 'doctorlist',
    element: <DoctorLists/>
  },
  {
    path: 'doctordetailuser',
    element: <DoctorDetailUser/>
  },
  {
    path: 'userNews',
    element: <News/>
  }
  


 
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}/>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
