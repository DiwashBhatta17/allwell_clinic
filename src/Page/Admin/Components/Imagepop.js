import axios from "axios";
import React, { useState } from "react";

export default function Imagepop(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { handlePopup, ids } = props;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  async function uploadNews() {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const response = await axios.post(
        "http://localhost:8081/news/upload-news-image/" + ids,
        formData
      );
      console.log("News updated:", response);
    } catch (error) {
      console.error("Error occurs", error);
    }
  }

  return (
    <div className="image pop fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40">
      <div className="popup h-[370px] w-[400px] bg-[#ffffff]">
        <div className="file text-[black] font-semibold ml-[20px] mt-[10px]">
          Upload File
        </div>
        <button
          className="cls bg-[#935353bb] w-[100px] text-white text-center rounded-[10px] ml-[260px] hover:bg-[#ab4949a9]"
          onClick={handlePopup}
        >
          Close
        </button>
        <div className="report border-2 border-yellow-200 w-[230px] h-[250px] ml-[25px] mt-[5px] bg-[#ffa60012]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="choosefile ml-[20px] mt-[140px] "
          />
          <div className="mt-[30px] ml-[-40px]">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Image chosen"
                className="h-[90px] mt-[-170px] ml-[100px]"
              />
            )}
          </div>
        </div>
        <button
          className="uI bg-[#51ab49bd] w-[120px] text-[white] text-center rounded-[10px] ml-[120px] mt-[14px] hover:bg-[#51ab493c]"
          onClick={uploadNews}
        >
          Upload News
        </button>
      </div>

      

    </div>
  );
}
