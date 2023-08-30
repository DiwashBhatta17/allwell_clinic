import React, { useState } from "react";
import UserFooter from "../../Page/Users/UserFooter";
import UserNavbar from "../../Page/Users/UserNavbar";

function News() {
    const [newsList, setNewsList] = useState(["","","","","",""])
  return (
    <>
    
      <div className="mx-[120px] mt-5 mb-5 ">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-[40px]">

            {
                newsList.map((value, index)=>(
                    <div key={index} className=" w-[350px]  border h-[350px] shadow">
                    <div>
                      <img
                        className="w-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErK9WFo7CsDTbX4pt5L9-rKxAH4tKY8WWyA&usqp=CAU"
                        alt=""
                      ></img>
                      <div className="gap-b-2 mx-1">
                        <h1 className="text-xl font-bold mb-1">
                          Covid 19 Vaccnation Booster Dose
                        </h1>
                        <p>
                          lorem isum hell ois a gun an d i kun ia kun abd hasgjs hjash
                          manifest as a aa don of a heool world
                        </p>
                      </div>
                    </div>
                  </div>


                ))
            }

        </div>
      </div>
      
    </>
  );
}

export default News;
