import React, { useRef, useState } from "react";

export default function Popup(props) {
  const { handlePopup } = props;
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="popupbg bg-[#497fabbb] h-[350px] w-[350px] ml-[-690px] mt-[50px] rounded-[50px] border-1 border-black">
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
      </p>
      <div className="file-preview">
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="selected file preview"
            className="h-[100px] ml-[120px] mt-[30px]"
          />
        )}
      </div>
      {!selectedFile && (
        <img
          src="/Images/upload.png"
          alt="upload"
          className="h-[100px] ml-[120px] mt-[30px] cursor-pointer"
          onClick={handleImageClick}
        />
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <p className="bg-[white] text-center font-semibold ml-[110px] w-[120px] mt-[20px] rounded-[30px] hover:bg-[#ffffff6c] cursor-pointer">
        {" "}
        Upload{" "}
      </p>
    </div>
  );
}
