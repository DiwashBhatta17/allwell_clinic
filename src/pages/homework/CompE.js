import React from "react";

function CompE() {
  return (
    <>
      <div className="items-center flex  bg-[#f5f0f0] justify-center h-[50vh]">
        <div className=" mx-[120px] items-center flex gap-[300px] justify-center ">
            <div className=" text-4xl text-black">LOGO</div>
            <div className="cont">
                    
                <ul className="text-black">
                    <li><h1 className="text-2xl mb-2">CONTENTS</h1></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Aticle</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Ask Yogi Maharjan</a></li>
                </ul>
            </div>

            <div>
                <h1 className="text-2xl text-black mb-2">CONNECT WITH US</h1>
                <ul className="text-black"> 
                    <li className="">Phone: <span className="underline">(0)20-7729-5454</span> </li>
                    <li>Email: <span className="underline">info@yogamagazine.com</span> </li>
                    <li>Office Address: 233 Bethnal Green Road <br />London, E2 6AB United Kingdom</li>
                    
                </ul>
            </div>

        </div>
      </div>
    </>
  );
}

export default CompE;
