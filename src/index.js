// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Landingpage from "./Page/Admin/Landingpage";
import AdminDoc from "./Page/Admin/AdminDoc";
import DocDetails from "./Page/Admin/DocDetails";
import Patient from "./Page/Admin/Patient";
import News from "./Page/Admin/News";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/patient", // Added a leading slash here
    element: <Patient />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/doctordetails",
    element: <DocDetails />,
  },
  {
    path: "/admindoc",
    element: <AdminDoc />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
