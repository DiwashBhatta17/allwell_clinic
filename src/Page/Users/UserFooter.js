import React from "react";

function UserFooter() {
  return (
    <footer className="bg-[#497FAB] text-white h-[30vh]">
      <div className="flex justify-around py-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">ALLWELL</h1>
          <p>
            Leading the way in Medical <br /> Excellence, Trusted Care.
          </p>
        </div>
        <div>
          <ul>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="div3">
          <h1 className="text-xl font-bold mb-2">Contact Us</h1>
          <p>Call: (977) 099-412011</p>
          <p>Email: allwellclinic@gmail.com</p>
          <p>Address: Buddhabari,Dhankutha Nepal</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-around my-4">
        <div>Copyright &copy; AllWell Clinics Pvt Ltd | Designed by Diwash</div>
        <div className=" gap-3 text-xl mb-2">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="  mx-2 fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;
