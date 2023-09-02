import React from 'react'
import { Link } from 'react-router-dom';

function DoctorWaitingPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-5xl font-sans font-bold text-[#b92d2d] my-4  text-center'>ADMIN APPROVAL REQUIRED</h1>
        <p className='text-xl text-black w-[800px] text-center'> You need an admin approval to login in to your user Account, please wait a while until the Admin approved your login Request.</p>
        <p>for more information please visit our <a className='text-[#3e56b7]' href="#">private policy</a></p>
        
        <Link to="/"><p className='text-[#3e56b7]'>Go back to dashboard</p></Link>
        
      
    </div>
  )
}

export default DoctorWaitingPage;
