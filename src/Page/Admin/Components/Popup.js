import React from "react";

export default function Popup(props) {
  const { handlePopup } = props;
  return (
    <div className="popupbg bg-[#497fabbb] h-[350px] w-[350px] ml-[-690px] mt-[50px] rounded-[50px] border-1 border-black">
      <div className="top">
        <button
          className="x ml-[300px] mt-[20px] bg-[white] w-[25px] rounded-[190px] hover:bg-[#ffffff85]"
          onClick={handlePopup}
        >
          X
        </button>
      </div>{" "}
      <p className="upld h-[40px] text-center ml-[0px] mt-[20px] rounded-[2px] font-semibold text-[white]">
        {" "}
        Upload the report for this patient.
        <hr />
      </p>
      <img
        src="/Images/upload.png"
        alt="upload"
        className="h-[100px] ml-[120px] mt-[30px] cursor-pointer"
      />
      <p className="bg-[white] text-center font-semibold ml-[110px] w-[120px] mt-[20px] rounded-[30px] hover:bg-[#ffffff6c] cursor-pointer">
        {" "}
        Upload{" "}
      </p>
    </div>
  );
}
