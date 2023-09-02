// import React, { useState } from "react";
// import Popup from "./Popup";

// export default function Patientdetails() {
//   // const { handlePopup, handleupload, isComponent } = props;
//   const [ispopup, setIspopup] = useState(false);

//   const uploadReport = () => {
//     setIspopup(true);
//   };

//   const closePopup = () => {
//     setIspopup(false);
//   };

//   return (
//     <div className="pdetails h-[60px] w-[400px] bg-[#497FAB]  ml=[370px] rounded-t-[10px] flex">
//       <p className="pd text-white text-center font-semibold mt-[10px] ml-[140px]">
//         Patient Details
//       </p>
//       <img
//         src="/Images/logged.png"
//         alt="logged"
//         className="log h-[80px] mt-[80px] ml-[-230px]"
//       />
//       <div className="bio h-[160px] w-[230px] bg-[white] shadow-md shadow-blue-500 mt-[100px] ml-[40px] text-[#497FAB] font-semibold text-center">
//         patient bio details
//       </div>
//       <div className="bio h-[130px] w-[400px] bg-[white] shadow-md shadow-blue-500 mt-[280px] ml-[-370px] text-[#497FAB] font-semibold text-center">
//         patient Site details
//       </div>
//       <button
//         className="bg-[#497FAB] w-[150px] h-[40px] ml-[-260px] mt-[430px] text-[white] hover:bg-[#497fabbb]"
//         onClick={uploadReport}
//       >
//         Upload report
//       </button>
//       {ispopup && <Popup closeReport={closePopup} />}
//     </div>
//   );
// }
