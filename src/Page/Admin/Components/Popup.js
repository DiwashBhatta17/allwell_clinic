import React, { useState } from "react";
import axios from "axios";
import uploadAfile from "../../../Services/Admin/uploadAfile";

export default function Popup(props) {
  const { handlePopup, id } = props;
  const [images, setImage] = useState(null);

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  console.log("idd", id);

  async function handleUpload() {
    if (images) {
      console.log("seectImage", images);
      try {
        const formData = new FormData();
        formData.append("image", images);

        const response = await uploadAfile(id.reportId, formData);
        console.log("res", response);
      } catch (error) {
        console.error("Error uploadin img", error);
      }
    } else {
      console.log("No image selected");
    }
  }

  return (
    <div className="image pop fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40">
      <div className="popup h-[370px] w-[400px] bg-[#ffffff]">
        <div className="file text-[black] font-semibold ml-[20px] mt-[10px]">
          Upload Patient Report
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
            className="choosefile ml-[20px] mt-[140px] "
            onChange={handleImage}
          />
        </div>
        <button
          className="uI bg-[#51ab49bd] w-[120px] text-[white] text-center rounded-[10px] ml-[120px] mt-[14px] hover:bg-[#51ab493c]"
          onClick={handleUpload}
        >
          Upload Report
        </button>
      </div>
    </div>
  );
}
