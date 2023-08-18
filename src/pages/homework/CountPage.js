import React, { useState } from 'react'

function CountPage() {
    const [Count, setCount]= useState(1);
  return (
    <div className='flex justify-center items-center h-screen gap-3 text-xl'>
        <button  className="border rounded-full bg-black text-white px-4 py-[2px]" onClick={()=>setCount(Count + 1)}>plus</button>
        <div>{Count}</div>
        <button className="border rounded-full bg-black text-white px-4 py-[2px]" onClick={()=>setCount(Count - 1)}>minus</button>
      
    </div>
  )
}

export default CountPage;
