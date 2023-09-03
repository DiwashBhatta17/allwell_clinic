import axios from "axios";
import React, { useState } from "react";

export default function Imagepop(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { handlePopup } = props;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  function uploadNews(newsId, updatedNewsData) {
    axios
      .post(`http://localhost:8081/news/update-news/${newsId}`, updatedNewsData)
      .then((response) => {
        // Handle the response if needed
        console.log("News updated:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error updating news:", error);
      });
  }

  return (
    <div className="image pop bg-[white] shadow-md shadow-blue-500 w-[400px] h-[350px] ml-[40px] mt-[-380px] relative">
      <div className="report bg-[#497FAB] h-[40px] text-center text-[white] font-semibold">
        Choose a photo to upload
        <button
          className="border-1 border-[white] mr-[-120px] ml-[57px] rounded-[10px] w-[25px] hover:bg-[#ffffff65]"
          onClick={handlePopup}
        >
          X
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="choosefile ml-[80px] mt-[130px]"
      />

      <div className="border-2 border-[black] mt-[30px]">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="h-[90px] mt-[-170px] ml-[100px]"
          />
        )}
      </div>
      <button className="uI bg-[#497FAB] w-fit text-[white] text-center rounded-[10px] ml-[120px] mt-[6px] hover:bg-[#497fab6b]">
        Upload News
      </button>
    </div>
  );
}
