import React from 'react'

function AsaPatient(props) {
  return (
    <div className="bg-[#2182f157] flex justify-between px-4 py-1 rounded-lg">
    <button onClick={()=>props.setStatus(true)} className="flex gap-2 px-4 hover:bg-[#fff] active:bg-[#c8c6c6] py-1 rounded-lg">
      <i className="fa-solid mt-1 text-[rgb(33,78,241)] fa-user-doctor"></i>
      <p>As a Doctor</p>
    </button>
    <button className="flex gap-2  bg-white px-4  active:bg-[#c8c6c6] focus:ring-violet-300  px-4 py-1 rounded-lg ...">
      <i className="fa-solid mt-1 text-[rgb(33,78,241)] fa-hospital-user"></i>
      <p>As a patients</p>
    </button>
  </div>
  )
}

export default AsaPatient
