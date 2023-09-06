import React from "react";
import Navbar from "./Adminnavbar";
import { useState } from "react";
import Imagepop from "./Components/Imagepop";
import axios from "axios";

export default function News() {
  const [ids, setId] = useState(null);
  const [pageinfo, setPageinfo] = useState("");

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

  async function createNews() {
    const response = await axios.post(
      "http://localhost:8081/news/create-news",
      data
    );
    console.log(response.data.newsId);
    setId(response.data.newsId);

    openImagePopup();
  }

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
      <div className="flex mt-3 ml-[300px] items-center">
        <div className="bg-[#d8aaaa] w-[300px] p-3 ">
          {" "}
          <div className="flex gap-2">
            <div className=" bg-[#497fab37] rounded px-3 py-1 ml-2 text-center shadow-md shadow-black">
              News ID
            </div>
            <select
              id="newsId"
              className=" bg-[#5082aa65] rounded shadow-md shadow-black px-3  font-semibold"
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
          </div>
          <div>
            {" "}
            <div className=" mx-2 px-3 py-1 w-[50%]  bg-[#497fab37]  text-center shadow-md mt-5  shadow-black">
              Title
            </div>
            <input
              type="text"
              className=" bg-[#5082aa65] w-[80%] mx-2 h-[40px] rounded mt-3"
              value={title}
              placeholder=" Your Title Here "
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <div className="mx-2 bg-[#497fab37] px-3 py-1 mt-5 rounded text-center shadow-md shadow-black w-[50%]">
              Body
            </div>
            <textarea
              type="text"
              className=" bg-[#5082aa65] mx-2 my-3 w-[80%] h-[100px] rounded-[10px]"
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </div>
          <div className="flex justify-center"><button
            className=" bg-[#497FAB] h-[30px] px-3 py-1 rounded-full flex  text-[white] text-center font-semibold "
            onClick={createNews}
          >
            Upload
          </button></div>
          {isImagePopupOpen && (
            <Imagepop ids={ids} handlePopup={closeImagePopup} />
          )}
        </div>
      </div>
    </>
  );
}
