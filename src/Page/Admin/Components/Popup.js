import React, { useState } from "react";
import axios from "axios";

export default function Popup(props) {
  const { handlePopup } = props;
  const [image, setImage] = useState("");

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  function handleAPI() {
    const formData = new FormData();
    formData.append("report", image);

    // Replace "url" with the actual API endpoint
    axios.post("", formData).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="popupbg bg-[#497fabbb] h-[350px] w-[350px] ml-[-460px] mt-[-450px] rounded-[50px] border-1 border-black">
      <div className="top">
        <button
          className="x ml-[300px] mt-[20px] bg-[white] w-[25px] rounded-[190px] hover:bg-[#ffffff85]"
          onClick={handlePopup}
        >
          X
        </button>
      </div>
      <p className="upld h-[40px] text-center ml-[0px] mt-[20px] rounded-[2px] font-semibold text-[white]">
        {" "}
        Upload the report for this patient.
        <hr />
      </p>{" "}
      <input
        type="file"
        className="cfile ml-[50px] mt-[20px]"
        onChange={handleImage}
      />
      <p
        className="bg-[white] text-center font-semibold ml-[110px] w-[120px] mt-[60px] rounded-[30px] hover:bg-[#ffffff6c] cursor-pointer"
        onClick={handleAPI}
      >
        {" "}
        Upload file{" "}
      </p>
    </div>
  );
}
