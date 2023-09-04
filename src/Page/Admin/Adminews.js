import React from "react";
import Navbar from "./Adminnavbar";
import { useState } from "react";
import Imagepop from "./Components/Imagepop";
import axios from "axios";

export default function News() {
  const [pageinfo, setPageinfo] = useState({
    contacts: "",
    location: "",
    email: "",
  });

  const [ids, setId] = useState(null);

 

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const data = {
    headLine: title,
    newsBody: body,
  }
  async function createNews() {
    const response = await axios.post("http://localhost:8081/news/create-news", data);
    console.log(response.data.newsId);
    setId(response.data.newsId);


    openImagePopup();
  }

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const openImagePopup = () => {
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="Allwellclinic h-[420] w-[100%] bg-[white] shadow-md shadow-blue-500 ml-[0px] mt-[30px]">
        <h1 className="text-[#497FAB] text-center text-[4vw]">
          Allwell clinic
        </h1>
      </div>
      <div className="Manage h-[290px] w-[100%] bg-[white] shadow-md shadow-blue-500 ml-[px] mt-[40px]">
        <img
          src="/Images/clinic.jpeg"
          alt="clinic"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="lowercage  mt-[100px] h-[00px] ">
        <div className="up h-[400px] w-[32%] shadow-md shadow-blue-500 ml-[40px] mt-[30px] rounded-t-[20px] ">
          <div className="want bg-[#497FAB] w-[100%] rounded-t-[10px] h-[60px] text-[white] text-center font-semibold">
            Want to Update anything?
          </div>
          <input
            type="text"
            className="addlink w-[90%] h-[40px] ml-[20px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center "
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <p className="ml-[120px] mt-[10px]">Add title of your news</p>
          <textarea
            className="link w-[90%] h-[130px] ml-[30px] mt-[20px] shadow-md shadow-blue-500 text-[#497FAB] text-center"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <p className="ml-[150px] mt-[10px]">Add Details</p>
        </div>
        <button
          className="pd bg-[#497FAB] h-[30px] w-[120px] ml-[140px] mt-[20px] text-[white] text-center font-semibold "
          onClick={createNews}
        >
          Next
        </button>
        {isImagePopupOpen && <Imagepop ids={ids} handlePopup={closeImagePopup} />}

        <div className="newsup h-[380px] w-[24%] shadow-md shadow-blue-500 ml-[880px] mt-[-450px] rounded-t-[20px] relative">
          <div className="nu bg-[#497FAB] h-[60px] w-[100%] ml-[0px] mt-[20px] text-[white] text-center font-semibold rounded-[10px]">
            <p>Update Page Info</p>
            <img
              src="/Images/Home page.png"
              alt="hIU"
              className="h-[30px] ml-[42px] mt-[-23px]"
            />
          </div>
          <img
            src="/Images/call.png"
            alt=""
            className="h-[120px] ml-[-30px] mb-[0px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-80px]">
            <input
              type="text"
              className="text-[#497FAB]"
              value={pageinfo.contacts}
              onChange={(event) => setPageinfo(event.target.value)}
            />
            {console.log(pageinfo.contacts)}
          </div>
          <img
            src="/Images/location.png"
            alt="location"
            className="h-[40px] mt-[50px] ml-[4px] "
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" className="text-[#497FAB]" />
          </div>
          <img
            src="/Images/mail.png"
            alt="mail"
            className="h-[30px] mt-[60px] ml-[10px]"
          />
          <div className="call w-[200px] h-[30px] bg=[white] shadow-md shadow-blue-500 ml-[70px] mt-[-40px]">
            <input type="text" className="text-[#497FAB]" />
          </div>

          <button className="b1 bg-[#497FAB] w-[200px] h-[30px] text-[white] text-center ml-[60px] mt-[40px] rounded-[20px]">
            Update Info
          </button>
        </div>
      </div>
    </>
  );
}
