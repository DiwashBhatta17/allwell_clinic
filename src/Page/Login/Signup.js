import React from "react";
import logo from "./img/AllWell Clinic.png";
import login1 from "./img/LoginImg.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AsaDoctor from "./AsaDoctor";
import AsaPatient from "./AsaPatient";
import RegisterService from "../../Services/LoginService/registerService";
import asAdoctorService from "../../Services/LoginService/asAdoctorService";
import { useDispatch, useSelector } from "react-redux";
import { setSignup, setlogin } from "../../components/State/slice/counterSlice";




// patientName
// doctorName

function Signup(props) {
  const signupStatus = useSelector((state)=> state.counter.signupvalue);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [signupData, setSignupdata] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    confirmPassword: "",
    
  });
  const [isDoctor, setisDoctor] = useState(true);

  const [status, setStatus] = useState(true);
  const [errorMessage, setErrormessage] = useState("");
  const [redirectToOTP, setRedirectToOTP] = useState(false);

  async function handelClick() {
    if (signupData.name == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.username == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.email == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.phone == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.confirmPassword == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password != signupData.confirmPassword) {
      setErrormessage("Confirm Password does not match with the new password");
    } else {
      console.log(isDoctor);
      if (isDoctor) {
        const doctorDataToSend = {
          doctorName: signupData.name,
          username: signupData.username,
          password: signupData.password,
          email: signupData.email,
          phone: signupData.phone,
        };
      
        console.log("doc");

        try {
          await asAdoctorService(doctorDataToSend);
          setErrormessage("");
           // Assuming the API response has a message field
        } catch (error) {
          const errorMessage = error;
          setErrormessage(errorMessage);
          console.log(errorMessage);

        }

        
      } else {
        const patientDataToSend = {
          patientName: signupData.name,
          username: signupData.username,
          password: signupData.password,
          email: signupData.email,
          phone: signupData.phone,
        };
      
        console.log('patient');
        try {

          await RegisterService(patientDataToSend);
          setRedirectToOTP(true);
          setErrormessage("");
           // Assuming the API response has a message field
        } catch (error) {
          const errorMessage = error;
          setErrormessage(error);
          console.log(errorMessage);
        }

        
      }
      

     
      // data fetching work here
      // console.log(signupData);
      setSignupdata({
        ...signupData,
        name: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        confirmPassword: "",
      });
    }
  }
  useEffect(() => {
    if (redirectToOTP) {
      const timeout = setTimeout(() => {
        setRedirectToOTP(false); // Reset the flag
        navigate('/otp')
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }
  }, [redirectToOTP]);

  function handelChange(event) {
    const { name, value } = event.target;
    setSignupdata({ ...signupData, [name]: value });
  }

  function handelRedirect(){
    dispatch(setlogin(true));
    dispatch(setSignup(false));
  }
  return signupStatus ? (
    <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src={logo} alt="" />
          </div>
          <div
            className=" text-center  rounded-lg alert-danger mb-2"
            role="alert"
          >
            {errorMessage}
          </div>
          {status ? (
            <AsaDoctor setStatus={setStatus} setisDoctor={setisDoctor} />
          ) : (
            <AsaPatient setStatus={setStatus} setisDoctor={setisDoctor} />
          )}

          {/* yo space */}

          <div>
            <div className="flex mb-1">
              <div className="">
                <label className="text-black mb-1 mt-2">Name</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg  py-1 px-1  border-black"
                  type="text"
                  placeholder=" Your Name"
                  name="name"
                  value={signupData.name}
                  onChange={handelChange}
                ></input>
              </div>
              <div>
                <label className="text-black mb-1 mt-2">Username</label>
                <br />
                <input
                  className="border-[1px] w-[90%] py-1 px-1 rounded-lg border-black"
                  type="text"
                  placeholder=" Your Username"
                  name="username"
                  value={signupData.username}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            <div className="flex mb-1">
              <div className="">
                <label className="text-black mb-1 mt-2">Email</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg px-1 py-1  border-black"
                  type="email"
                  placeholder=" domain@gmail.com"
                  name="email"
                  value={signupData.email}
                  onChange={handelChange}
                ></input>
              </div>
              <div>
                <label className="text-black mb-1 mt-2">Phone Number</label>
                <br />
                <input
                  className="border-[1px] w-[90%] px-1 py-1 rounded-lg border-black"
                  type="text"
                  placeholder=" (977)-9812346789"
                  name="phone"
                  value={signupData.phone}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            <div className="flex mb-1">
              <div className="">
                <label className="text-black mb-1 mt-2">Password</label>
                <br />
                <input
                  className="border-[1px] w-[90%] rounded-lg  py-1 px-1 border-black"
                  type="password"
                  placeholder=" ********"
                  name="password"
                  value={signupData.password}
                  onChange={handelChange}
                ></input>
              </div>
              <div>
                <label className="text-black mb-1 mt-2">Confirm Password</label>
                <br />
                <input
                  className="border-[1px] w-[90%] py-1 px-1 rounded-lg border-black"
                  type="password"
                  placeholder=" ********"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handelChange}
                ></input>
              </div>
            </div>

            <div className="mt-5 text-center w-full ">
              <button
                onClick={handelClick}
                className=" hover:bg-[#5672d7] bg-[#2182f1c4] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white "
              >
                Register
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Already have an account?</p>
              <Link to='/' ><button onClick={handelRedirect} className="text-[#2181F1] hover:text-[#4c7bb9]">Login?</button></Link> 
            </div>
          </div>
        </div>
        <div className=" text-right  pl-6">
          <button onClick={() => dispatch(setSignup(false))}>
            <i className="absolute top-[100px] text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
          </button>
          <img className="w-[450px]" src={login1} alt="" />
        </div>
      </div>
      
    </div>
    
  ) : (
    ""
  );
}

export default Signup;
