import React from "react";

function DemoPage() {
  return (
    <>
      <header className="top-0 bg-[#eeecec] shadow ">
        <div className="py-4 ">
          <div className=" flex items-center justify-center gap-4 ">
            <h1 className="text-2xl mr-[60%] font-bold text-[#5dc780]">
              NavBar
            </h1>
            <ul className="flex gap-3 align">
              <li>
                <a href="#/navBar">Demo</a>
              </li>
              <li>
                <a href="/#/navBar">Source Code</a>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </header>

      <div className="ml-5 mt-2 w-[92%]">
        <div className="row ml-[5%] mt-10">
          <div className="col">
          <h1 className="text-xl font-bold ">This is a Heading</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            maiores, labore nulla, eligendi ad reiciendis laboriosam expedita
            illum impedit veniam minus laudantium eveniet quo. Suscipit ipsa
            molestiae tempore modi tenetur.</p>
          </div>
          <div className="col ml-">
        
            <div className=" w-[80%] shadow h-auto mr-4 border">
              
              <img
                src="https://th.bing.com/th/id/OIP.CxbKuVIV9LjIt1HawOqdwQHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default DemoPage;
