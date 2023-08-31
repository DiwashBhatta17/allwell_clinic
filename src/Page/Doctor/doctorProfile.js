import React, { useEffect, useRef, useState } from "react";
import img from "../Users/UserImages/Bitmap.png";
import DoctorNavbar from "./doctorNavbar";
import doctorprofileservice from "../../Services/DoctorService/doctorprofileservice";
import doctorupdateform from "../../Services/DoctorService/doctorupdateform";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutsuccess } from "../../components/State/slice/counterSlice";
import doctorImgUpdateService, {doctorImgGetService} from "../../Services/DoctorService/doctorImgUpdateService";

function DoctorProfile() {
  const [doctorData, setDoctordata] = useState({});
  const doctorId = sessionStorage.getItem("userId");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [selectedImage, setSelectedImage] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const inputRef = useRef(null);
  

  const [formData, setFormData] = useState({
    doctorName: doctorData.doctorName,
    username:doctorData.username,
    phone: doctorData.phone,
    specialization :doctorData.specialization,
    doctorBio: doctorData.bio,
  });


  async function fetchData() {
    try {
      const response = await doctorprofileservice(doctorId);
      setDoctordata(response);
    } catch (error) {
      console.log(error);
    }
  }

  // Image get upload part start
  async function handleUpload() {
    if (selectedImage) {
      console.log("seectImage" ,selectedImage);
      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
        const response = await doctorImgUpdateService( formData);
        console.log("res", response);
      } catch (error) {
        console.error("Error uploadin img", error);
      }
    } else {
      console.log("No image selected");
    }
  }

  useEffect(() => {
    async function getProfileImg() {
      try {
        const userId = sessionStorage.getItem("userId");
        const response = await doctorImgGetService(userId);
        const imgUrl = URL.createObjectURL(response); // Assuming response.data is the image blob
        setImgURL(imgUrl);
        console.log("response is", imgUrl);
      } catch (error) {
        console.error("Error fetching profile image", error);
      }
    }
    getProfileImg();
    // Clean up the URL when the component unmounts
    return () => {
      if (imgURL) {
        URL.revokeObjectURL(imgURL);
      }
    };
  }, [imgURL]); 
  // handle upload part
  useEffect(() => {
    handleUpload();
  }, [selectedImage]);


  // End image upload get part


  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event){
    const {name , value} = event.target;
    setFormData({...formData,[name]:value});

  }
  async function handleSubmit(){
    console.log('form data', formData );
    await doctorupdateform(doctorId, formData);
    fetchData();

  }

  function handelLogout(){
    localStorage.removeItem('jwtToken');
    dispatch(logoutsuccess);
    navigate('/');

  }
  const handleFileSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  

  const doctorDetails = {
    username: doctorData.username,
    specialization: doctorData.specialization,
    name: doctorData.doctorName,
    about: doctorData.doctorBio,
    experience: "10+",
    phone: doctorData.phone,
    email: doctorData.email,
    whatsapp: doctorData.phone,
  };
  return (
    <>
      {/* component 1  */}
      <div>
        <DoctorNavbar />
        <div className="flex mt-5  justify-around ">
          {/* image part div */}
          <div>
          <label>
              <img
                className="w-[250px] rounded-full cursor-pointer"
                src={imgURL}
                alt="img"
              />
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
              <button
                className="absolute w-[250px] h-[250px] top-0 left-0 opacity-0 cursor-pointer"
                onClick={() => inputRef.current.click()}
              >
                {/* This is an invisible button that covers the image */}
              </button>
            </label>
            <h1 className="justify-center flex mt-3 text-2xl font-bold">
              {doctorDetails.name}
            </h1>
          </div>

          {/* About us part Div */}
          <div className="w-[40%] mt-2">
            <h1 className="text-2xl font-bold">{doctorDetails.username} ({doctorData.specialization})</h1>
            <p className="my-2 ">{doctorDetails.about}</p>
          </div>
        </div>
      </div>
      {/* comma */}

      {/* comp 3 */}

      <div className="flex justify-between mx-[120px]">
        <div className="mt-[100px] ml-[120px] mb-[100px]">
          <div className="flex text-3xl mb-3 gap-4 ">
            <i className="fa-solid fa-phone-volume mt-2 text-[#497FAB]"></i>
            <p>{doctorDetails.phone}</p>
          </div>
          <div className="flex text-3xl mb-3 gap-4">
            <i className="text-[#497FAB] mt-2 fa-solid fa-envelope"></i>
            <p>{doctorDetails.email}</p>
          </div>
          <div className="flex text-3xl  mb-3 gap-4">
            <i className="text-[#497FAB] fa-brands mt-2 fa-whatsapp"></i>
            <p>{doctorDetails.whatsapp}</p>
          </div>
        </div>

        <div className="mb-5 w-[30%] justify-center items-center">
          <div className="flex flex-col gap-4 w-[100%] justify-center my-5">
            <input
              placeholder=" Change Name"
              name="doctorName"
              value={formData.doctorName}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              onChange={handleChange}
              type="text"
            />
            <input
              placeholder=" Change Email Address" 
              value={formData.username}
              name="username"
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="email"
            />
            <input
              placeholder=" Update Bio"
              name="doctorBio"
              value={formData.doctorBio}
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              placeholder=" Add Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              placeholder=" Change Phone Number"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button onClick={handleSubmit} className="bg-[#497FAB] text-white px-4 py-2 rounded-[100px]">
              Save Change
            </button>
            <button onClick={handelLogout} className="border-3 px-4 rounded-[100px] active:bg-[#bd5f5f29] hover:border-[#984545] border-[#e51616bd]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
