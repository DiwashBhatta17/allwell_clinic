import React from "react";
import Landingpage from "./Page/Admin/Landingpage";
import AdminDoc from "./Page/Admin/AdminDoc";
import DocDetails from "./Page/Admin/DocDetails";
import Adminpatient from "./Page/Admin/Adminpatient";
import Adminews from "./Page/Admin/Adminews";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FirstComponent from "./Page/Users/LandingPage/FirstComponent";
import ServiceCom1 from "./Page/Users/ServicesPage/ServiceCom1";
import AppointmentFormControl from "./components/ForUsers/AppointmentFormControl";
import Login from "./Page/Login/Login";
import Signup from "./Page/Login/Signup";
import Otp from "./Page/Login/Otp";
import DoctorLists from "./Page/Users/DoctorLists";
import DoctorDetailUser from "./Page/Users/DoctorDetailUser";
import { Provider } from "react-redux";
import store from "./components/State/store";
import UserProfilePage from "./Page/Users/UserProfile/UserProfilePage";
import Doctordashboard from "./Page/Doctor/doctorDashboard";
import AppoinmentsList from "./Page/Doctor/AppoinmentsList";
import DoctorProfile from "./Page/Doctor/doctorProfile";
import DoctorWaitingPage from "./Page/Doctor/DoctorWaitingPage";
import UserNews from "./Page/Users/UserNews";
import DoctorNews from "./Page/Doctor/DoctorNews";
import DoctorHistory from "./Page/Doctor/doctorHistory";
import Imagepop from "./Page/Admin/Components/Imagepop";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <FirstComponent />,
  },
  {
    path: "otp",
    element: <Otp />,
  },
  {
    path: "service",
    element: <ServiceCom1 />,
  },
  {
    path: "appointment/:id",
    element: <AppointmentFormControl />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "doctorlist",
    element: <DoctorLists />,
  },
  {
    path: "doctordetailuser/:id",
    element: <DoctorDetailUser />,
  },
  {
    path: "userNews",
    element: <UserNews />,
  },
  {
    path: "userProfile",
    element: <UserProfilePage />,
  },

  // Doctor setup
  {
    path: "doctordashboard",
    element: <Doctordashboard />,
  },
  {
    path: "userProfile",
    element: <UserProfilePage />,
  },

  {
    path: "doctorAppointmentlist",
    element: <AppoinmentsList />,
  },
  {
    path: "doctorProfile",
    element: <DoctorProfile />,
  },
  {
    path: "doctorwaiting",
    element: <DoctorWaitingPage />,
  },
  {
    path: "doctorNews",
    element: <DoctorNews />,
  },
  {
    path: "doctorhistory",
    element: <DoctorHistory />,
  },

  //Admin page

  {
    path: "/Admindashboard",
    element: <Landingpage />,
  },
  {
    path: "/patient",
    element: <Adminpatient />,
  },
  {
    path: "/Adminnews",
    element: <Adminews />,
  },
  {
    path: "/doctordetails",
    element: <DocDetails />,
  },
  {
    path: "/admindoc",
    element: <AdminDoc />,
  },
  {
    path: "/imagepop",
    element: <Imagepop />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routerConfig} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
