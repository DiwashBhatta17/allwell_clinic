import React from "react";
import Navbar from "./Adminnavbar";
import { useState } from "react";
import Imagepop from "./Components/Imagepop";
import axios from "axios";

export default function News() {
  const [ids, setId] = useState(null);

  // function createNews() {
  //   axios.put("http://localhost:8081/news/update-news");
  // }

  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newsid, setNewsid] = useState();

  async function upadteNews() {
    const response = await axios.put(
      "http://localhost:8081/news/update-news",
      data
    );
  }

  const data = {
    headLine: title,
    newsBody: body,
  };

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const openImagePopup = () => {
    setIsImagePopupOpen(true);
    console.log("button clicked.");
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
  };
  //news id
  const [newsId, setNewsId] = useState(0);
  const newsIdOptions = [1, 2, 3, 4];
  //setting newsID
  const handleNewsIdChange = (event) => {
    const selectedValue = event.target.value;
    setNewsId(selectedValue);
    console.log("newsid is:", selectedValue);
  };

  return (
    <>
      <Navbar />
      <div className="vd bg-[white] w-[300px] h-[70px] shadow-md mt-[20px]  ml-[300px] shadow-black text-center text-[40px]">
        Update News
      </div>
      <div className="container h-[400px] w-[970px] mt-[10px]  ml-[260px] bg-[#497fab27] pt-[60px] flex ">
        <div className="id bg-[#497fab37] mt-[0px] w-[70px] h-fit rounded-[10px] text-center ml-3 shadow-md  shadow-black">
          News ID
        </div>
        <select
          id="newsId"
          className="nid bg-[#5082aa65] ml-[40px] h-[40px] mt-2 rounded-[10px] text-center font-semibold"
          value={newsId}
          onChange={handleNewsIdChange}
        >
          <option value=""></option>
          {newsIdOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="id bg-[#497fab37] mt-[90px] w-[70px] h-[30px] rounded-[10px] text-center ml-[-135px] shadow-md  shadow-black">
          Title
        </div>
        <input
          type="text"
          className="nid bg-[#5082aa65] w-[400px] ml-[50px] h-[40px] mt-[90px] rounded-[10px]"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="id bg-[#497fab37] mt-[230px]  w-[70px] h-fit rounded-[10px] text-center ml-[-510px] shadow-md  shadow-black">
          Body
        </div>
        <textarea
          type="text"
          className="nid bg-[#5082aa65] w-[300px] ml-[50px] h-[40px] mt-[190px] rounded-[10px]"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button
          className="upbt bg-[#00800079] w-[90px] h-fit rounded-[10px] mt-[290px] ml-[200px] hover:bg-[#0080005d]"
          onClick={openImagePopup}
        >
          Upload
        </button>
        {isImagePopupOpen && <Imagepop handlePopup={closeImagePopup} />}
      </div>
    </>
  );
}
