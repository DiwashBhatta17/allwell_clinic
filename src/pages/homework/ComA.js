import React from 'react'
import ComB from './ComB';
import ComC from './ComC';
import CompD from './CompD';
import CompE from './CompE';

function ComA() {
  return (
    <>
    <div className="items-center  bg-[#ecd7d7] text-center flex justify-center h-[80vh]">
      <div className=" text-center m-1">
        <h2 className='text-4xl font-bold  font-mono'>THE <spam className='text-[#dbcf35]'> CHAKRA </spam><span className="underline">YOGA</span></h2>
        <h2 className='text-black mt-2 mb-5'>Unleash You energy</h2>

        <div className="mt-4 mb-4"><button className=' px-5 py-2 rounded-full text-white bg-black'>Explore More <i className="w-[30px] fa-solid fa-arrow-right-long "></i></button></div>
        <div className='pt-5 justify-center flex items-center'>
          <p className='text-center '>Refresh,rejuvenate and strengthen your mind, body and spirit. A classic manual of <br />naturally 
            effective, tried and tested ancient yoga exercise
          </p>
        </div>
      </div>
    </div>
    <ComB/>
    <ComC/>
    <CompD/>
    <CompE/>
    
    
    </>
  )
}

export default ComA;