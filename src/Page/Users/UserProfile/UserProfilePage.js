import React, { useEffect, useRef, useState } from "react";
import img from "../UserImages/Bitmap.png";
import patientprofileservice from "../../../Services/User/patientprofileservice";
import { logoutsuccess } from "../../../components/State/slice/counterSlice";
import { useDispatch } from "react-redux";
import UserNavbar from "../UserNavbar";
import { useNavigate } from "react-router-dom";
import patientProfileupdate from "../../../Services/User/patientProfileupdate";
import profileImgUpdateService from "../../../Services/User/profileImgUpdateService";
import { profileImgGetService } from "../../../Services/User/profileImgUpdateService";
import UserMedicalHistory from "./UserMedicalHistory";

function UserProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});

  const [selectedImage, setSelectedImage] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const inputRef = useRef(null);

  

  const [updateData, setUpdateData] = useState({
    patientName: profileData.patientName,
    email: profileData.email,
    phone: profileData.phone,
  });

  async function fetchData() {
    try {
      const data = await patientprofileservice();
      setProfileData(data);
    } catch (error) {
      // Handle error
    }
  }

  async function updateInfo() {
    try {
      const response = patientProfileupdate(updateData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    fetchData();
  }

  async function handleUpload() {
    if (selectedImage) {
      console.log("seectImage" ,selectedImage);
      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
       

        const response = await profileImgUpdateService( formData);
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
        const response = await profileImgGetService();
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
  }, []); 
  useEffect(() => {
    async function getProfileImg() {
      try {
        const response = await profileImgGetService();
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

  useEffect(() => {
    // Call the service function when the component mounts

    fetchData();
  }, []);

  function handelLogout() {
    localStorage.removeItem("jwtToken");
    dispatch(logoutsuccess);
    navigate("/");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: value });
  }

  const handleFileSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const userProfileData = {
    username: profileData.username,
    name: profileData.patientName,
  };

  return (
    <>
      <UserNavbar />
      <div className="flex justify-around">
        <div className="flex flex-col text-center my-5 gap-4">
          <h3 className="text-xl font-bold">{userProfileData.username}</h3>
          <div className="">
            <label>
             <button className="" onClick={() => inputRef.current.click()}> <img
                className="w-[250px] rounded-full cursor-pointer"
                src={imgURL}
                alt="img"
              /></button>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
             
            </label>
          </div>
          <h1 className="text-3xl font-sans font-bold">
            {userProfileData.name}
          </h1>
        </div>
        <div className="my-5 w-[30%] justify-center items-center">
          <div className="flex flex-col gap-4 w-[100%] justify-center my-5">
            <input
              name="patientName"
              placeholder="नाम परिवर्तन"
              value={updateData.patientName}
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              name="phone"
              placeholder="फोननम्बर परिवर्तन "
              value={updateData.phone}
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
            <input
              name="email"
              placeholder="इमेल परिवर्तन"
              value={updateData.email}
              onChange={handleChange}
              className=" h-[40px] rounded-lg bg-[#f3efef]"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={updateInfo}
              className="bg-[#497FAB] text-white px-4 py-2 rounded-[100px]"
            >
              परिवर्तन गर्नुहोस्
            </button>
            <button
              onClick={handelLogout}
              className="border-3 px-4 rounded-[100px] active:bg-[#bd5f5f29] hover:border-[#984545] border-[#e51616bd]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <UserMedicalHistory/>
    </>
  );
}

export default UserProfilePage;
