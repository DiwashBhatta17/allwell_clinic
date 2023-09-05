import React, { useState } from "react";
import UserNavbar from '../UserNavbar';
import UserFooter from "../UserFooter";

function FirstAppForm(promps) {
  const {formData, handelchange, form1visible, setForm1visible, setForm2visible} = promps;

  function handelNext(){
    setForm1visible(false);
    setForm2visible(true);
  }
  return (form1visible)?
    <>
    <UserNavbar/>
    <div className="flex flex-col justify-center items-center min-h-screen text-center my-5">
      <div className="mb-[30px]">
        <h1 className="text-3xl font-bold text-[#170F49]">उपचार दर्ता फारम</h1>
        <p>
          फारम भर्नुहोस्<br />
          सबै विवरण अनिवार्य छ
        </p>
      </div>
      {/* form */}
      <div className="bg-[#FAF8F8] p-4 px-5 rounded-[20px]">
        <div className="my-5">
          <h1 className="text-2xl font-bold text-[#170F49] mb-2">
            सम्पर्क विवरण
          </h1>
          <p className="mb-2">
          </p>
          <hr />
        </div>

        {/* form Start here */}
        <div className="text-left" type="post">
          <div className="flex flex-col ">
            <label htmlFor="name" className="font-bold text-black">
             नाम
            </label>
            <input
              className=" shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
              type="text"
              name="name"
              placeholder=" नाम"
              value={formData.name}
              onChange={handelchange}
              required
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <label htmlFor="name" className="font-bold text-black">
              फोन नम्बर 
            </label>
            <input
              className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
              type="text"
              name="phone"
              placeholder="  +977 98123456789"
              value={formData.phone}
              onChange={handelchange}
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <label htmlFor="name" className="font-bold text-black">
            इमेल
            </label>
            <input
              className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
              type="email"
              name="email"
              placeholder="  email@gmail.com"
              value={formData.email}
              onChange={handelchange}
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <label htmlFor="name" className="font-bold text-black">
            जन्म मिति
            </label>
            <input
              className="shadow-sm rounded-xl mt-2 h-[45px] w-[300px]"
              type="date"
              name="date"
              placeholder="  YYYY-MM-DD"
              value={formData.date}
              onChange={handelchange}
            />
          </div>

          <div className="mt-5">
            <button onClick={handelNext} className="border px-5 py-2 bg-[#497FAB] text-xl text-white rounded-full font-bold" to="2">Next</button>
          </div>
        </div>
      </div>
      
    </div>
    
    <UserFooter/>
    </>
  : "";
}

export default FirstAppForm;
