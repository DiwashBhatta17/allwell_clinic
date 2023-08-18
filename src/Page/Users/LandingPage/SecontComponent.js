import React from 'react';
import img from '../UserImages/UserImg2.png';
import img2 from '../UserImages/Why choose us_.png';
import FirstComponent from './FirstComponent';

function SecontComponent() {
  return (
    <>
    <FirstComponent/>
    <div className="h-[10vh] mt-5 bg-white flex mx-[140px] items-center justify-between">
        <div className="flex gap-3">
            <div className="text-4xl mt-2 text-[#159EEC]"><i class="fa-solid fa-phone-volume"></i></div>
            <div><h1 className='text-2xl '>Emergency</h1>
            <p className='text-[#159EEC] '>(977)-9863749812</p>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="text-4xl mt-2 text-[#159EEC]"><i class="fa-regular fa-clock"></i></div>
            <div><h1 className='text-2xl '>WORK HOUR</h1>
            <p className='text-[#159EEC] '>09:00 - 20:00</p>
            </div>
        </div>
        <div className="flex gap-2 ">
            <div className="text-4xl mt-2 text-[#159EEC]"><i class="fa-solid fa-location-dot"></i></div>
            <div><h1 className='text-2xl '>LOCATION</h1>
            <p className='text-[#159EEC] '>Buddhabari, Dhankuta</p>
            </div>
        </div>

    </div>
    <div className='flex items-center justify-center'>
    <img src={img} alt="" />
    </div>
    <div>
      <img src={img2} alt="" />
    </div>
    

    </>
  )
}

export default SecontComponent;
