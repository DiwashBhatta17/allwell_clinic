import React from 'react'
import UserLoginNavbar from '../UserLoginNavbar'
import img from '../UserImages/Bitmap.png';

function UserProfilePage() {
    const userProfileData ={
        username: "___bhatta",
        name: "Diwash Bhatta",
    }
  return (
    <>
    <UserLoginNavbar/>
    <div className='flex justify-around'>
        <div className='flex flex-col text-center my-5 gap-4'>
            <h3 className='text-xl font-bold'>{userProfileData.username}</h3>
            <div className=''><img className='w-[250px] rounded-full' src={img} alt="" /></div>
            <h1 className='text-3xl font-sans font-bold'>{userProfileData.name}</h1>
        </div>
        <div className='my-5 w-[30%] justify-center items-center'>
            <div className='flex flex-col gap-4 w-[100%] justify-center my-5'>
                <input placeholder=' Change Name' className=' h-[40px] rounded-lg bg-[#f3efef]' type="text" />
                <input placeholder=' Change Email Address' className=' h-[40px] rounded-lg bg-[#f3efef]' type="text" />
                <input placeholder=' Change Username' className=' h-[40px] rounded-lg bg-[#f3efef]' type="text" />
            </div>
            <div className='flex gap-4'>
                <button className='bg-[#497FAB] text-white px-4 py-2 rounded-[100px]'>Save Change</button>
                <button className='border-3 px-4 rounded-[100px] border-[#e51616bd]'>Logout</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default UserProfilePage
